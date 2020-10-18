package cbr.weight;

import cbr.password.PasswordService;
import cbr.password.WrongPasswordException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.*;

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
        if (weights.size() > 0) {
            LocalDate lastDate = weights.get(0).getDate();
            ArrayList<Weight> missingWeights = new ArrayList<Weight>();
            for (int i = 0; i < weights.size(); i++) {
                Weight weight = weights.get(i);
                if (weight.getDate().isAfter(lastDate.plusDays(1))) {
                    LocalDate missingDate = lastDate.plusDays(1);
                    Weight missingWeight = new Weight(-1, missingDate, null);
                    missingWeights.add(missingWeight);;
                    while( weight.getDate().isAfter(missingDate.plusDays(1))) {
                        missingDate = missingDate.plusDays(1);
                        missingWeight = new Weight(-1, missingDate, null);
                        missingWeights.add(missingWeight);;
                    }
                }
                lastDate = weight.getDate();
            }
            weights.addAll(missingWeights);
        }
        Collections.sort(weights, new Comparator<Weight>() {
            @Override
            public int compare(Weight o1, Weight o2) {
                if (o1.getDate().isBefore(o2.getDate())) {
                    return -1;
                }
                return 1;
            }
        });
        return weights;
    }
}
