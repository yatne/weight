package cbr.password;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

// I don't mind that this "password" system is highly unsafe ¯\_(ツ)_/¯

@Service
public class PasswordService {

    @Autowired
    private PasswordRepository passwordRepository;
    private List<String> cachedPasswords = new ArrayList<>();

    private List<String> getAllPasswords() {
        List<Password> passwords = passwordRepository.findAll();
        List<String> stringPasswords = new ArrayList<>();
        for (Password password : passwords) {
            stringPasswords.add(password.getPassword());
        }
        return stringPasswords;
    }

    public boolean checkPassword(String password) {
        if (cachedPasswords.contains(password)) {
            return true;
        } else {
            cachedPasswords = getAllPasswords();
            return cachedPasswords.contains(password);
        }
    }
}
