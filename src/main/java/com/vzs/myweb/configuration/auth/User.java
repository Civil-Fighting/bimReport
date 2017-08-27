package com.vzs.myweb.configuration.auth;


import com.vzs.myweb.util.VzsStringUtils;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Builder;

import java.util.Set;
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User {
    public static final String COOKIE_VERSION = "1";

    String ip;

    String loginTime;
    String loginId; // from DB
    String email;
    String nickName;
    Integer verifiedLevel;

    Set<String> roleIds;
    Long userId; // user Id

    boolean isTempLogin; //session level login

    Integer accountType;

    public User(String ip) {
        this.ip = ip;
    }

    public boolean isLogin() {
        return VzsStringUtils.isNoneBlank(loginId);
    }

    @Override
    public String toString() {
        VzsToStringBuilder vzsToStringBuilder = new VzsToStringBuilder(this, VzsSecurityConstant.ROLE_SPLIT);
        if (roleIds != null) {
            for (String roleId : roleIds) {
                vzsToStringBuilder.append(roleId);
            }
        }
        return new VzsToStringBuilder(this, VzsSecurityConstant.FIELD_SPLIT).append(COOKIE_VERSION).append(ip).append(loginTime).append(loginId).append(email).append(nickName).append(verifiedLevel).
                append(vzsToStringBuilder.toString()).append(userId).append(accountType).toString();
    }
}
