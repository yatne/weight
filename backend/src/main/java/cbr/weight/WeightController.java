package cbr.weight;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
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

    @RequestMapping(method=RequestMethod.POST, value="/weights")
    public void andWeight(@RequestBody Weight weight) {
        weightService.addNewWeight(weight);
    }
}
