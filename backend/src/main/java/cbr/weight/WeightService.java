package cbr.weight;

import cbr.password.PasswordService;
import cbr.password.WrongPasswordException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class WeightService {

    @Autowired
    private WeightRepository weightRepository;
    @Autowired
    private PasswordService passwordService;

    public List<Weight> getWeightsBetweenDates(LocalDate dateFrom, LocalDate dateTo) {
        List<Weight> weights;
        if (dateFrom != null && dateTo != null) {
            weights = weightRepository.findWeightsBetweenDates(dateFrom, dateTo);
        } else {
            weights = getWeightsFromThisMonth();
        }
        return fillMissingWeights(weights);
    }

    public List<Weight> getAllWeights() {
        return fillMissingWeights(weightRepository.findAllOrderByDateAsc());
    }

    private List<Weight> getWeightsFromThisMonth() {
        LocalDate firstOfMonth = LocalDate.now().withDayOfMonth(1);
        return weightRepository.findWeightsBetweenDates(firstOfMonth, LocalDate.now());
    }

    public Weight getWeightById(Integer id) {
        Optional<Weight> weightOptional = weightRepository.findById(id);
        return weightOptional.get();
    }

    @Transactional
    public void addOrReplaceWeight(Weight weight, String password) {
        if (passwordService.checkPassword(password)) {
            Weight existingWeight = weightRepository.findByDate(weight.getDate());
            if (existingWeight != null) {
                weightRepository.updateWeightByDate(weight.getDate(), weight.getWeight());
            } else {
                weightRepository.save(weight);
            }
        } else {
            throw new WrongPasswordException();
        }
    }

    private List<Weight> fillMissingWeights(List<Weight> weights) {
        List<Weight> weightsWithAllDates = new ArrayList<>();
        if (weights.size() > 0) {
            LocalDate lastDate = weights.get(0).getDate();
            for (int i = 0; i < weights.size(); i++) {
                Weight weight = weights.get(i);
                weightsWithAllDates.add(weight);
                while (weight.getDate().isAfter(lastDate.plusDays(1))) {
                    Weight nullWeight = new Weight(-1, lastDate.plusDays(1), null);
                    weightsWithAllDates.add(i, nullWeight);
                    lastDate = nullWeight.getDate();
                }
                lastDate = weightsWithAllDates.get(weightsWithAllDates.size()-1).getDate();
            }
        }
        return weightsWithAllDates;
    }
}
