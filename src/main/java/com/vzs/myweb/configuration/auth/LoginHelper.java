package com.vzs.myweb.configuration.auth;

import com.vzs.myweb.util.VzsWebUtils;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;
import java.net.URLEncoder;

@Slf4j
@Component
public class LoginHelper {
    String loginUrl = "/auth/loginRequest";
    public String getUrl(HttpServletRequest request) {
        log.info("[loginUrl] " + loginUrl);

        if (StringUtils.isBlank(loginUrl)) {
            throw new IllegalArgumentException("Login server is blank! Add properties file.");
        }

        String returnServer = VzsWebUtils.getRequestAddress(request);
        String returnUrl = VzsWebUtils.getRequestURLWithQueryString(request);

        try {
            return loginUrl + "?rtnUrl=" + URLEncoder.encode(returnServer + returnUrl, "utf-8");
        } catch (Exception e) {
            throw new IllegalStateException(e.getMessage(), e);
        }
    }


}
