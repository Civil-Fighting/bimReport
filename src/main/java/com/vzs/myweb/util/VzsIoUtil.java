package com.vzs.myweb.util;

import java.io.Closeable;
import java.io.IOException;
import java.io.InputStream;

/**
 * Created by byao on 5/24/15.
 */
public class VzsIoUtil {
	public static void closeQuietly(InputStream input) {
		closeQuietly((Closeable)input);
	}
	public static void closeQuietly(Closeable closeable) {
		try {
			if (closeable != null) {
				closeable.close();
			}
		} catch (IOException ioe) {
			// ignore
		}
	}
}
