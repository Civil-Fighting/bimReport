package com.vzs.myweb.web.controller.test.auth;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class VerifyImageDto {
    String sessionId;
    String token;
}

