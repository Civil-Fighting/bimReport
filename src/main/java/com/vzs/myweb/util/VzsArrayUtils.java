package com.vzs.myweb.util;

/**
 * Created by byao on 4/18/15.
 */
public abstract class VzsArrayUtils extends org.apache.commons.lang3.ArrayUtils{
	public static String getDefaultArrayValue(String[] arr, int index, String defaultVal) {
		if (arr != null && arr.length >= index + 1) {
			return arr[index];
		} else {
			return defaultVal;
		}
	}

	public static String getDefaultArrayValue(String[] arr, int index) {
		return getDefaultArrayValue(arr, index, "");
	}
}
