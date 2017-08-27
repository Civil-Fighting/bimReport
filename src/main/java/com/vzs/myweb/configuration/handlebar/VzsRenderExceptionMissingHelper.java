package com.vzs.myweb.configuration.handlebar;

import com.github.jknack.handlebars.Helper;
import com.github.jknack.handlebars.Options;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.IOException;

/**
 * Created by byao on 30/07/2017.
 */
public class VzsRenderExceptionMissingHelper implements Helper<Object> {
    private static final Logger log = LoggerFactory.getLogger(VzsRenderExceptionMissingHelper.class);

    public VzsRenderExceptionMissingHelper() {
    }

    public CharSequence apply(Object context, Options options) throws IOException {
        String errorMessage = String.format("handlebars value missing %s(%s %d:%d)", new Object[]{options.fn.text(), options.fn.filename(), Integer.valueOf(options.fn.position()[0]), Integer.valueOf(options.fn.position()[1])});
        log.error(errorMessage);
        throw new IllegalArgumentException(errorMessage);
    }
}