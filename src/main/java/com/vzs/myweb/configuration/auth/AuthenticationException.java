package com.vzs.myweb.configuration.auth;

public class AuthenticationException extends RuntimeException {
    public AuthenticationException(String message) {
        super(message);
    }

    public AuthenticationException(String message, Throwable t) {
        super(message, t);
    }

    public AuthenticationException(Throwable t) {
        super(t);
    }
}

