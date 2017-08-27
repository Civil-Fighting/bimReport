package com.vzs.myweb.configuration.handlebar.helper;

import com.github.jknack.handlebars.Helper;
import com.github.jknack.handlebars.Options;
import lombok.extern.slf4j.Slf4j;

import java.io.IOException;
import static java.lang.String.format;

/**
 * Created by byao on 5/2/15.
 */
@Slf4j
public class VzsRenderExceptionMissingHelper implements Helper<Object> {

    @Override
    public CharSequence apply(Object context, Options options) throws IOException {
        final String errorMessage = format("handlebars value missing %s(%s %d:%d)", options.fn.text(), options.fn.filename(), options.fn.position()[0],
                options.fn.position()[1]);

        log.error(errorMessage);

        throw new IllegalArgumentException(errorMessage);
    }
}
