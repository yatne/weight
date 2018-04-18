package cbr.weight;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WeightService {

    @Autowired
    private WeightRepository weightRepository;

    public List<Weight> getAllWeights() {
        return weightRepository.findAll();
    }

    public Weight getWeightById(int id) {
        return weightRepository.getOne(id);
    }

    public void addNewWeight(Weight weight) {
        weightRepository.save(weight);
    }
}
