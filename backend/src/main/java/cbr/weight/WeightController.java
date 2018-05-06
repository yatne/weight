package cbr.weight;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@CrossOrigin
@RestController
public class WeightController {

    @Autowired
    private WeightService weightService;

    @RequestMapping("/weights")
    public List<Weight> getWeightsBetweenDates(
        @RequestParam(value="dateFrom", required=false)
        @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
            LocalDate dateFrom,
        @RequestParam(value="dateTo", required=false)
        @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
            LocalDate dateTo
    ) {
        return weightService.getWieghtsBetweenDates(dateFrom, dateTo);
    }

    @RequestMapping("/weights/{id}")
    public  Weight getWeightById(@PathVariable Integer id) {
        return weightService.getWeightById(id);
    }

    @RequestMapping(method=RequestMethod.POST, value="/weights")
    public void andWeight(@RequestBody Weight weight) {
        weightService.addNewWeight(weight);
    }
}
