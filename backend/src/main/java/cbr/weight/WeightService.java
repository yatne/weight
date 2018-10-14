package cbr.weight;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class WeightService {

    @Autowired
    private WeightRepository weightRepository;

    public List<Weight> getWieghtsBetweenDates(LocalDate dateFrom, LocalDate dateTo) {
        if (dateFrom != null && dateTo != null) {
            return weightRepository.findWeightsBetweenDates(dateFrom, dateTo);
        } else {
            return getWeightsFromThisMonth();
        }
    }

    private List<Weight> getWeightsFromThisMonth() {
        LocalDate firstOfMonth = LocalDate.now().withDayOfMonth(1);
        return weightRepository.findWeightsBetweenDates(firstOfMonth, LocalDate.now());
    }

    public Weight getWeightById(Integer id) {
        Optional<Weight> weightOptional = weightRepository.findById(id);
        return weightOptional.get();
    }

    public void addNewWeight(Weight weight) {
        weightRepository.save(weight);
    }
}
