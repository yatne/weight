package cbr.weight;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class WeightController {

    @Autowired
    private WeightService weightService;

    @RequestMapping("/weights")
    public List<Weight> getAllWeights() {
        return weightService.getAllWeights();
    }

    @RequestMapping("/weights/{id}")
    public  Weight getWeightById(@PathVariable int id) {
        return weightService.getWeightById(id);
    }
}
