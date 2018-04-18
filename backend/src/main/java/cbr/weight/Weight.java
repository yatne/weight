package cbr.weight;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import java.time.LocalDate;

@Entity
public class Weight {

    @Id
    @SequenceGenerator(name="weight_seq", sequenceName="weight_id_seq", allocationSize = 1)
    @GeneratedValue(generator="weight_seq")
    private int id;
    private float weight;
    private LocalDate date;

    public Weight(int id, LocalDate date, float weight) {
        this.id = id;
        this.date = date;
        this.weight = weight;
    }

    public Weight() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public float getWeight() {
        return weight;
    }

    public void setWeight(float weight) {
        this.weight = weight;
    }

}
