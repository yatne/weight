package cbr.weight;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class WeightService {

    @Autowired
    private WeightRepository weightRepository;

    public List<Weight> getWeightsBetweenDates(LocalDate dateFrom, LocalDate dateTo) {
        List<Weight> weights;
        if (dateFrom != null && dateTo != null) {
            weights = weightRepository.findWeightsBetweenDates(dateFrom, dateTo);
        } else {
            weights = getWeightsFromThisMonth();
        }
        return fillMissingWeigths(weights);
    }

    public List<Weight> getAllWeights() {
        return fillMissingWeigths(weightRepository.findAll());
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
    public void addOrReplaceWeight(Weight weight) {
        Weight existingWeight =  weightRepository.findByDate(weight.getDate());
        if (existingWeight != null) {
            weightRepository.updateWeightByDate(weight.getDate(), weight.getWeight());
        } else {
            weightRepository.save(weight);
        }
    }

    private List<Weight> fillMissingWeigths(List<Weight> weights) {
        if (weights.size() > 0) {
            LocalDate lastDate = weights.get(0).getDate();
            for (int i = 0; i < weights.size(); i++) {
                Weight weight = weights.get(i);
                if (weight.getDate().isAfter(lastDate.plusDays(1))) {
                    weights.add(i, new Weight(-1, lastDate.plusDays(1), null));
                }
                lastDate = weight.getDate();
            }
        }
        return weights;
    }
}
