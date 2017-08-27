package com.vzs.myweb.util;

import org.springframework.util.Assert;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;

public class VzsWebUtils {
    public static final String DEFAULT_COOKIE_CHARSET = "utf-8";
    public static final int DEFAULT_HTTP_PORT = 80;
    public static final int DEFAULT_HTTPS_PORT = 443;

    public static String getCookieValue(HttpServletRequest request, String name) {
        Cookie cookie = getCookie(request, name);
        return cookie != null ? decode(cookie.getValue()) : null;
    }

    public static Cookie getCookie(HttpServletRequest request, String name) {
        Assert.notNull(request, "Request must not be null");
        Cookie cookies[] = request.getCookies();
        if (cookies != null) {
            for (Cookie cookie : cookies) {
                if (name.equals(cookie.getName())) {
                    return cookie;
                }
            }
        }
        return null;
    }

    public static String decode(String value) {
        try {
            return URLDecoder.decode(value, DEFAULT_COOKIE_CHARSET);
        } catch (UnsupportedEncodingException e) {
            throw new IllegalStateException(e.getMessage(), e);
        }
    }

    public static String getRequestAddress(HttpServletRequest request) {
        String requestAddress = request.getScheme() + "://" + request.getServerName()
                + ((request.getServerPort() == DEFAULT_HTTP_PORT || request.getServerPort() == DEFAULT_HTTPS_PORT) ? "" : ":" + request.getServerPort())
                + request.getContextPath();
        return requestAddress;
    }

    public static String getRequestURLWithQueryString(HttpServletRequest request) {
        String requestURI = request.getRequestURI();
        String queryString = (request.getQueryString() != null) ? "?" + request.getQueryString() : "";
        return requestURI + queryString;
    }

}
