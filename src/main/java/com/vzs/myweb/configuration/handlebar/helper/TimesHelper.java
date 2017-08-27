package com.vzs.myweb.configuration.handlebar.helper;

import com.github.jknack.handlebars.Helper;
import com.github.jknack.handlebars.Options;

import java.io.IOException;

/**
 * Created by byao on 5/2/15.
 */
public class TimesHelper implements Helper<Integer> {
    public static final String HELPER_NAME = "times";

    @Override
    public CharSequence apply(Integer context, Options options) throws IOException {
        if (context == null) {
            return "";
        }

        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < context; i ++) {
            sb.append(options.fn(i + 1));
        }
        return sb.toString();
    }
}