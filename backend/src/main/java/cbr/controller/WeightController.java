package cbr.controller;

import cbr.model.Weight;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@RestController
public class WeightController {

    @RequestMapping("/weights")
    public List<Weight> getAllWeights() {
        List<Weight> weights = new ArrayList<>();
        weights.add(new Weight(1,80, new Date()));
        weights.add(new Weight(2,81, new Date()));
        weights.add(new Weight(4,83, new Date()));
        return weights;
    }
}
