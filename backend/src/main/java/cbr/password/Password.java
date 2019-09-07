package cbr.password;

import javax.persistence.*;

// I don't mind that this "password" system is highly unsafe ¯\_(ツ)_/¯

@Entity
@Table(name = "passwords")
public class Password {

    @Id
    @SequenceGenerator(name="password_seq", sequenceName="password_id_seq", allocationSize = 1)
    @GeneratedValue(generator="password_seq")
    private Integer id;
    private String password;

    public Password(Integer id, String password) {
        this.id = id;
        this.password = password;
    }

    public Password() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
