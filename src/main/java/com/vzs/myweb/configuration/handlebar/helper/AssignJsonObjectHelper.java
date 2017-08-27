package com.vzs.myweb.configuration.handlebar.helper;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.github.jknack.handlebars.Helper;
import com.github.jknack.handlebars.Options;
import com.google.common.base.Preconditions;
import lombok.extern.slf4j.Slf4j;

import java.io.IOException;
import java.util.HashMap;

/**
 * Created by byao on 5/2/15.
 */
@Slf4j
public class AssignJsonObjectHelper implements Helper<String> {
    public static final String HELPER_NAME = "assignJsonObject";

    private final ObjectMapper objectMapper = new ObjectMapper();

    @Override
    public CharSequence apply(String variableName, Options options) throws IOException {
        Preconditions.checkNotNull(variableName, "Need variable name to store the map");

        String contents = String.valueOf(options.apply(options.fn));
        log.debug("Json contents : {}", contents);
        @SuppressWarnings("unchecked") HashMap<String, Object> jsonObject = objectMapper.readValue(contents, HashMap.class);
        options.context.data(variableName, jsonObject);
        return null;
    }
}
