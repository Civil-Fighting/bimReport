package com.vzs.myweb.configuration.auth;

import com.google.common.collect.Sets;
import com.vzs.myweb.util.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.net.URLEncoder;
import java.util.Set;

@Component
public class VzsUserFactory {
    private static final Logger log = LoggerFactory.getLogger(VzsUserFactory.class);
    @Autowired
    VzsSecurityManager vzsSecurityManager;
    @Autowired
    VzsEncryptProvider vzsEncryptProvider;
    private String cookieNameAppend = "VCEID";

    public VzsUserFactory() {
    }

    private String getCookieName() {
        return this.cookieNameAppend;
    }

    public User createEmptyUser(HttpServletRequest request) {
        User user = new User(request.getRemoteAddr());
        user.setLoginTime(VzsDateUtils.getNowTime());
        return user;
    }

    private User findTempUser(HttpServletRequest request) {
        User user = (User)request.getSession().getAttribute(".jxplus.cn");
        return user != null && user.isTempLogin ? user : null;
    }

    public User getUser(HttpServletRequest request, HttpServletResponse response) {
        User tempUser = this.findTempUser(request);
        if (tempUser != null) {
            return tempUser;
        } else {
            User user = this.createEmptyUser(request);

            try {
                String[] cookieValue = this.getCookieValues(request);
                if (cookieValue == null) {
                    return user;
                } else {
                    String version = VzsArrayUtils.getDefaultArrayValue(cookieValue, 0);
                    String loginTime = VzsArrayUtils.getDefaultArrayValue(cookieValue, 2);
                    if (this.isUserInvalid(version, loginTime)) {
                        this.removeCookieUser(response);
                        return user;
                    } else {
                        this.setUser(user, cookieValue);
                        this.setUserRoleIds(user, cookieValue);
                        this.createUser(response, user);
                        return user;
                    }
                }
            } catch (Exception var8) {
                log.error(var8.getMessage(), var8);
                this.removeCookieUser(response);
                return new User(request.getRemoteAddr());
            }
        }
    }

    public void createTempUser(HttpServletRequest request, User user) throws Exception {
        user.setTempLogin(Boolean.TRUE.booleanValue());
        request.getSession().setAttribute(".jxplus.cn", user);
    }

    public void createUser(HttpServletResponse response, User user) throws Exception {
        response.setHeader("P3P", "CP=\"ALL DSP COR MON LAW IVDi HIS IVAi DELi SAMi OUR LEG PHY UNI ONL DEM STA INT NAV PUR FIN OTC GOV\"");
        response.addHeader("Pragma", "no-cache");
        response.addHeader("Cache-Control", "no-cache");
        user.setLoginTime(user.getLoginTime() != null ? user.getLoginTime() : VzsDateUtils.getNowTime());
        String encryptedUserToString = this.vzsSecurityManager.encryptWithoutSalt(user.toString(), this.getSecurityKey());
        Cookie cookie = new Cookie(this.getCookieName(), URLEncoder.encode(encryptedUserToString, "UTF-8"));
        cookie.setPath("/");
        cookie.setDomain(".jxplus.cn");
        cookie.setMaxAge(28800);
        response.addCookie(cookie);
    }

    public String getSecurityKey() {
        return "CEInfr20150523V1";
    }

    private void setUserRoleIds(User user, String[] cookieValue) {
        try {
            Set<String> set = Sets.newHashSet(cookieValue[7].split(","));
            user.setRoleIds(set);
        } catch (Exception var4) {
            log.warn(var4.getMessage(), var4);
        }

    }

    private void setUser(User user, String[] cookieValue) {
        user.setLoginTime(VzsArrayUtils.getDefaultArrayValue(cookieValue, 2));
        user.setLoginId(VzsArrayUtils.getDefaultArrayValue(cookieValue, 3));
        user.setEmail(VzsArrayUtils.getDefaultArrayValue(cookieValue, 4));
        user.setNickName(VzsArrayUtils.getDefaultArrayValue(cookieValue, 5));
        user.setVerifiedLevel(VzsNumberUtils.createInteger(VzsArrayUtils.getDefaultArrayValue(cookieValue, 6)));
        user.setUserId(Long.parseLong(VzsArrayUtils.getDefaultArrayValue(cookieValue, 8)));
        String accountTypeStr = VzsArrayUtils.getDefaultArrayValue(cookieValue, 9);
        Integer accountType = VzsStringUtils.isEmpty(accountTypeStr) ? -1 : Integer.parseInt(accountTypeStr);
        user.setAccountType(accountType);
    }

    public void removeUser(HttpServletRequest request, HttpServletResponse response) {
        this.removeTempUser(request);
        this.removeCookieUser(response);
    }

    private void removeTempUser(HttpServletRequest request) {
        request.getSession().setAttribute(".jxplus.cn", (Object)null);
    }

    private void removeCookieUser(HttpServletResponse response) {
        Cookie cookie = new Cookie(this.getCookieName(), "");
        cookie.setMaxAge(0);
        cookie.setPath("/");
        cookie.setDomain(".jxplus.cn");
        response.addCookie(cookie);
    }

    private boolean isUserInvalid(String version, String loginTime) {
        return !"1".equals(version) || VzsDateUtils.getIntervalSeconds(loginTime) > 28800L;
    }

    private String[] getCookieValues(HttpServletRequest request) throws Exception {
        String authCookieValue = VzsWebUtils.getCookieValue(request, this.getCookieName());
        if (!VzsStringUtils.isEmpty(authCookieValue)) {
            String decrptyVookieValue = this.vzsSecurityManager.decryptWithoutSalt(authCookieValue, this.getSecurityKey());
            return decrptyVookieValue.split("@#");
        } else {
            return null;
        }
    }
}
