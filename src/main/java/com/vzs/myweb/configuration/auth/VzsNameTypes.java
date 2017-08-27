package com.vzs.myweb.configuration.auth;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum VzsNameTypes {
    USER("User");
    private String description;
}