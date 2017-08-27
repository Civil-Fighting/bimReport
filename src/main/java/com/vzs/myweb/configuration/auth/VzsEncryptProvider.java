package com.vzs.myweb.configuration.auth;


import org.springframework.stereotype.Service;

@Service
public class VzsEncryptProvider {
    public VzsEncryptProvider() {
    }

    public String makeMd5(String str) {
        return VzsMd5Provider.string2Md5(str);
    }
}
