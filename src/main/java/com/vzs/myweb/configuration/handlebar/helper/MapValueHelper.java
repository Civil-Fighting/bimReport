package com.vzs.myweb.configuration.handlebar.helper;

import com.github.jknack.handlebars.Helper;
import com.github.jknack.handlebars.Options;
import com.google.common.base.Preconditions;
import lombok.extern.slf4j.Slf4j;

import java.io.IOException;
import java.util.Map;

/**
 * Created by byao on 5/2/15.
 */
@Slf4j
public class MapValueHelper implements Helper<Map<?, ?>> {
    public static final String HELPER_NAME = "mapValue";
    public static final String VAR_PARAM_NAME = "var";

    @Override
    public CharSequence apply(Map<?, ?> context, Options options) throws IOException {
        Preconditions.checkNotNull(context, "Map 객체는 null일 수 없습니다.");
        Preconditions.checkArgument(options.params.length == 1, "Key 를 지정해야합니다.");

        Object key = options.param(0);
        Object value = context.get(key);

        saveValueAsVariable(options, value);

        if (value == null) {
            return options.inverse();
        }
        return options.fn(value);

    }

    private void saveValueAsVariable(Options options, Object value) {
        String variableName = options.hash(VAR_PARAM_NAME);

        if (variableName != null) {
            log.debug("New Variable : {} -> {}", variableName, value);
            options.context.data(variableName, value);
        }
    }
}