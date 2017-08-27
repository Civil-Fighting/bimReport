package com.vzs.myweb.configuration.auth;

import org.apache.commons.lang3.builder.ToStringBuilder;

public class VzsToStringBuilder extends ToStringBuilder {
    public VzsToStringBuilder(Object object, String filedSepeartor) {
        super(object, new VzsToStringStyle(filedSepeartor));
    }
}
