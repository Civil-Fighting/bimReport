package com.vzs.myweb.util;

import org.apache.commons.lang3.builder.ToStringBuilder;

/**
 * Created by byao on 5/23/15.
 */
public class VzsToStringBuilder extends ToStringBuilder {
	public VzsToStringBuilder(Object object, String filedSepeartor) {
		super(object, new VzsToStringStyle(filedSepeartor));
	}
}