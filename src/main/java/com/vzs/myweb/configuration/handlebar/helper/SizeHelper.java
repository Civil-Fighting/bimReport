package com.vzs.myweb.configuration.handlebar.helper;

import com.github.jknack.handlebars.Helper;
import com.github.jknack.handlebars.Options;
import com.vzs.myweb.util.VzsStringUtils;
import lombok.extern.slf4j.Slf4j;

import java.io.IOException;
import java.lang.reflect.Array;
import java.util.Collection;

/**
 * Created by byao on 5/2/15.
 */
@Slf4j
public class SizeHelper implements Helper<Object> {

    public static final String HELPER_NAME = "size";

    public static final String VARIABLE_NAME_HASH_KEY = "var";

    @Override
    public CharSequence apply(Object context, Options options) throws IOException {
        int size = calculateSize(context);

        String varName = options.hash(VARIABLE_NAME_HASH_KEY);

        if (varName == null) {
            return String.valueOf(size);
        }

        options.data(varName, size);
        return "";
    }

    private int calculateSize(Object context) {
        if (context == null) {
            log.warn("{{size context}} is null.");
            return 0;
        }

        if (context instanceof CharSequence) {
            return VzsStringUtils.length((CharSequence) context);
        }

        if (context.getClass().isArray()) {
            return Array.getLength(context);
        }

        if (context instanceof Collection) {
            return ((Collection) context).size();
        }

        throw new IllegalArgumentException(context + " , " + context.getClass().getCanonicalName() + " is not applicable to SizeHelper.");
    }
}