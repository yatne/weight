package cbr.password;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.FORBIDDEN, reason = "wrong password")
public class WrongPasswordException extends RuntimeException {}
