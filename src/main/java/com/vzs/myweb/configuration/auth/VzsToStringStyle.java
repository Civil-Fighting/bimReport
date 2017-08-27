package com.vzs.myweb.configuration.auth;

import org.apache.commons.lang3.builder.ToStringStyle;

public class VzsToStringStyle extends ToStringStyle {
    VzsToStringStyle(String filedSeparator) {
        this.setUseFieldNames(false);
        this.setUseClassName(false);
        this.setUseIdentityHashCode(false);
        this.setContentEnd("");
        this.setContentStart("");
        this.setFieldSeparator(filedSeparator);
    }
}