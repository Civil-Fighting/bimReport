package com.vzs.myweb.web.controller.test;

import com.vzs.myweb.configuration.auth.Role;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/hello/auth")
public class HelloAuthController {

    @RequestMapping("/auth")
    @ResponseBody
    @Role("auth")
    public String auth() {
        return "auth";
    }
}
