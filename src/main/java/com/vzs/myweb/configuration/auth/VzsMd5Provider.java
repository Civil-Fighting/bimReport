package com.vzs.myweb.configuration.auth;


import com.vzs.myweb.util.VzsStringUtils;
import org.springframework.security.authentication.encoding.Md5PasswordEncoder;

public class VzsMd5Provider {
    public VzsMd5Provider() {
    }

    public static String string2Md5(String str) {
        if (VzsStringUtils.isEmpty(str)) {
            return "";
        } else {
            Md5PasswordEncoder md5PasswordEncoder = new Md5PasswordEncoder();
            md5PasswordEncoder.setEncodeHashAsBase64(false);
            return md5PasswordEncoder.encodePassword(str, "vzs97@163.com");
        }
    }
}
