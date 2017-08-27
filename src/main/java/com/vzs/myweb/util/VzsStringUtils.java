package com.vzs.myweb.util;

/**
 * Created by byao on 4/26/15.
 */
public class VzsStringUtils  extends org.apache.commons.lang3.StringUtils {
	public static Boolean pharseBoolean(String string) {
		if (isEmpty(string)) {
			return Boolean.FALSE;
		} else {
			return Boolean.valueOf(string);
		}
	}
}
