package com.vzs.myweb.util;

import org.joda.time.DateTime;
import org.joda.time.format.DateTimeFormat;
import org.joda.time.format.DateTimeFormatter;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

/**
 * Created by byao on 5/2/15.
 */
public class VzsDateUtils extends org.apache.commons.lang3.time.DateUtils  {
    public static final String FORMAT_DATETIME = "yyyy/MM/dd HH:mm:ss";
    public static final String FORMAT_DATE = "yyyy/MM/dd";
    public static final String FORMAT_TIME = "HH:mm:ss";


    public static String format(Date date, String format) {
        SimpleDateFormat sdf = new SimpleDateFormat(format);
        return sdf.format(date);
    }

    /**
     * return deep copy of java.util.Date object.
     *
     */
    public static Date dateDeepCopy(Date date) {
        if (date == null) {
            return null;
        }
        return new Date(date.getTime());
    }

    public static Date truncateTime(Date date) {
        if (date == null) {
            return null;
        }
        return truncate(date, Calendar.DATE);
    }

    public static Date maximizeTime(Date date) {
        if (date == null) {
            return null;
        }

        Calendar calendar = Calendar.getInstance();
        calendar.setTime(date);
        calendar.set(Calendar.HOUR_OF_DAY, calendar.getMaximum(Calendar.HOUR_OF_DAY));
        calendar.set(Calendar.MINUTE, calendar.getMaximum(Calendar.MINUTE));
        calendar.set(Calendar.SECOND, calendar.getMaximum(Calendar.SECOND));
        calendar.set(Calendar.MILLISECOND, calendar.getMaximum(Calendar.MILLISECOND));
        return calendar.getTime();
    }

    public static String getNowTime() {
	    return getTime("yyyyMMddHHmmss");
    }

    public static String getTime(String format) {
	    Calendar cal = Calendar.getInstance();
	    SimpleDateFormat sdf = new SimpleDateFormat(format);
	    return sdf.format(cal.getTime());
    }

    public static long getIntervalSeconds(String yyyyMMddHHmmss) {
	    if (yyyyMMddHHmmss == null || yyyyMMddHHmmss.length() != 14) {
		    return 0;
	    }
	    DateTimeFormatter fmt = DateTimeFormat.forPattern("yyyyMMddHHmmss");
	    DateTime endDt = fmt.parseDateTime(yyyyMMddHHmmss);
	    DateTime today = fmt.parseDateTime(getTime("yyyyMMddHHmmss"));

	    return (today.getMillis() - endDt.getMillis()) / 1000;
    }
}
