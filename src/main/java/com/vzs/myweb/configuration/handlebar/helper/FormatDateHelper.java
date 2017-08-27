package com.vzs.myweb.configuration.handlebar.helper;

import com.github.jknack.handlebars.Helper;
import com.github.jknack.handlebars.Options;
import com.vzs.myweb.util.VzsDateUtils;
import lombok.Getter;
import lombok.Setter;

import java.io.IOException;
import java.util.Date;

/**
 * Created by byao on 5/2/15.
 */
public class FormatDateHelper implements Helper<Date> {

    public static final String HELPER_NAME = "formatDate";

    @Getter
    @Setter
    private String defaultFormat = VzsDateUtils.FORMAT_DATETIME;

    @Override
    public CharSequence apply(Date context, Options options) throws IOException {
        String format = options.param(0, defaultFormat);
        return VzsDateUtils.format(context, format);
    }
}
