package com.vzs.myweb.configuration.auth;

import java.nio.charset.Charset;

public class VzsSecurityConstant {
    public static final String globalEncryptSalt = "vzs97@163.com";
    public static final Charset CHARACTER_SET = Charset.forName("UTF-8");
    public static final String ENCRYPTION_ALGORITHM = "AES";
    public static final String SECURITY_KEY = "CEInfr20150523V1";
    public static final String FIELD_SPLIT = "@#";
    public static final String ROLE_SPLIT = ",";
    public static final String DOMAIN = ".jxplus.cn";
    public static final int COOKIE_MAX_AGE = 28800;
}
