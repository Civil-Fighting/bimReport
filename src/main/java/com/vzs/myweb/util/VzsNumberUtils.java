package com.vzs.myweb.util;

import com.google.common.base.Preconditions;

import java.math.BigInteger;
import java.text.DecimalFormat;

/**
 * Created by byao on 5/2/15.
 */
public class VzsNumberUtils extends org.apache.commons.lang3.math.NumberUtils {
    public static final String FORMAT_DOUBLE = "###,###.##";
    public static final String FORMAT_INTEGER = "###,###";

    public static String format(Number number, String format) {
        DecimalFormat decimalFormat = new DecimalFormat(format);

        return decimalFormat.format(number);
    }

    public static byte[] intToBytes(int value) {
        return new byte[] {(byte) (value >>> 24), (byte) (value >>> 16), (byte) (value >>> 8), (byte) (value)}; // NOSONAR
    }

    public static int bytesToInt(byte[] bytes) {
        int value = ((int) bytes[0] & 0xFF) << 24; // NOSONAR
        value += ((int) bytes[1] & 0xFF) << 16; // NOSONAR
        value += ((int) bytes[2] & 0xFF) << 8; // NOSONAR
        value += (int) bytes[3] & 0xFF; // NOSONAR
        return value;
    }

    public static long asLong(Object value) {
        Preconditions.checkNotNull(value);

        if (value instanceof BigInteger) {
            return ((BigInteger) value).longValue();
        }

        if (value instanceof Number) {
            return ((Number) value).longValue();
        }

        throw new IllegalArgumentException(value + " is not Number or BigInteger. - " + value.getClass());
    }
}
