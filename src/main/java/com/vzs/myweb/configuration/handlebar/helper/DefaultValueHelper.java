package com.vzs.myweb.configuration.handlebar.helper;

import com.github.jknack.handlebars.Helper;
import com.github.jknack.handlebars.Options;
import lombok.extern.slf4j.Slf4j;

import java.io.IOException;

/**
 * Created by byao on 5/2/15.
 */
@Slf4j
public class DefaultValueHelper implements Helper<Object> {
    public static final String HELPER_NAME = "default";

    public static final String DEFAULT_VALUE = "";

    @Override
    public CharSequence apply(Object context, Options options) throws IOException {
        if (context != null) {
            return String.valueOf(context);
        }

        CharSequence defaultValue = DEFAULT_VALUE;

        if (options.params.length >= 1) {
            defaultValue = options.param(0);
        }

        log.debug("Handlebars context missing. redener default value : [{}]", defaultValue);
        return defaultValue;
    }
}
