package com.vzs.myweb.util;

import org.apache.commons.lang3.builder.ToStringStyle;

/**
 * Created by byao on 5/23/15.
 */
public class VzsToStringStyle extends ToStringStyle {
	VzsToStringStyle(String filedSeparator) {
		super();
		this.setUseFieldNames(false);
		this.setUseClassName(false);
		this.setUseIdentityHashCode(false);
		this.setContentEnd("");
		this.setContentStart("");
		this.setFieldSeparator(filedSeparator);
	}

}