package cbr.weight;

import java.util.Date;

public class Weight {

    private int id;
    private Date date;
    private float weight;

    public Weight(int id, Date date, float weight) {
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

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public float getWeight() {
        return weight;
    }

    public void setWeight(float weight) {
        this.weight = weight;
    }

}
