package com.vzs.myweb.configuration.handlebar.helper;

import com.github.jknack.handlebars.Helper;
import com.github.jknack.handlebars.Options;
import com.vzs.myweb.util.VzsNumberUtils;
import lombok.Getter;
import lombok.Setter;

import java.io.IOException;

/**
 * Created by byao on 5/2/15.
 */
public class FormatNumberHelper implements Helper<Number> {

    public static final String HELPER_NAME = "formatNumber";

    @Getter
    @Setter
    private String defaultFormat = VzsNumberUtils.FORMAT_INTEGER;

    @Override
    public CharSequence apply(Number context, Options options) throws IOException {
        String format = options.param(0, defaultFormat);
        return VzsNumberUtils.format(context, format);
    }
}
