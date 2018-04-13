package cbr.weight;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class WeightService {
    private List<Weight> weights;

    public WeightService() {
        List<Weight> weights = new ArrayList<>();
        weights.add(new Weight(1, new Date(),80 ));
        weights.add(new Weight(2, new Date(),81));
        weights.add(new Weight(4,  new Date(),83));
        this.weights = weights;
    }

    public List<Weight> getAllWeights() {
        return this.weights;
    }

    public Weight getWeightById(int id) {
        return this.weights.stream().filter(weight -> weight.getId() == id).findFirst().get();
    }

    public void addNewWeight(Weight weight) {
        this.weights.add(weight);
    }
}
