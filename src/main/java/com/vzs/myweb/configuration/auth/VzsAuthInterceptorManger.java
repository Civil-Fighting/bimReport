package com.vzs.myweb.configuration.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;

@Component
public class VzsAuthInterceptorManger {
    @Autowired
    VzsRequestUserInterceptor vzsRequestUserInterceptor;
    @Autowired
    VzsAuthenticationInterceptor vzsAuthenticationInterceptor;

    public void register(InterceptorRegistry registry) {
        registry.addInterceptor(this.vzsRequestUserInterceptor);
        registry.addInterceptor(vzsAuthenticationInterceptor);
    }
}
