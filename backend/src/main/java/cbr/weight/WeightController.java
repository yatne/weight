package cbr.weight;

import cbr.password.WrongPasswordException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
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
        @RequestParam(value = "dateFrom", required = false)
        @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
            LocalDate dateFrom,
        @RequestParam(value = "dateTo", required = false)
        @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
            LocalDate dateTo
    ) {
        return weightService.getWeightsBetweenDates(dateFrom, dateTo);
    }

    @RequestMapping("/weights/all")
    public List<Weight> getAllWeights() {
        return weightService.getAllWeights();
    }

    @RequestMapping("/weights/{id}")
    public Weight getWeightById(@PathVariable Integer id) {
        return weightService.getWeightById(id);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/weights")
    public void addOrReplaceWeight (
            @RequestBody Weight weight,
            @RequestHeader("Authorization") String password
    ) {
        try {
            weightService.addOrReplaceWeight(weight, password);
        } catch (RuntimeException e) {
            throw new WrongPasswordException();
        }
    }
}