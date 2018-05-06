package cbr.weight;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;

@Entity
@Table(name = "weights")
public class Weight implements Serializable {

    @Id
    @SequenceGenerator(name="weight_seq", sequenceName="weight_id_seq", allocationSize = 1)
    @GeneratedValue(generator="weight_seq")
    private Integer id;
    private Float weight;
    private LocalDate date;

    public Weight(Integer id, LocalDate date, Float weight) {
        this.id = id;
        this.date = date;
        this.weight = weight;
    }

    public Weight() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public Float getWeight() {
        return weight;
    }

    public void setWeight(Float weight) {
        this.weight = weight;
    }

}
