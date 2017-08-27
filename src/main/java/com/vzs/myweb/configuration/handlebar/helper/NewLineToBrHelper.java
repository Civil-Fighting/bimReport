package com.vzs.myweb.configuration.handlebar.helper;

import com.github.jknack.handlebars.Handlebars;
import com.github.jknack.handlebars.Helper;
import com.github.jknack.handlebars.Options;

import java.io.IOException;

/**
 * Created by byao on 5/2/15.
 */
public class NewLineToBrHelper implements Helper<CharSequence> {
    public static final String HELPER_NAME = "nl2br";
    public static final String NEW_LINE_REGEX = "(\r\n|\n\r|\r|\n)";

    @Override
    public CharSequence apply(CharSequence context, Options options) throws IOException {
        if (context == null) {
            return "";
        }

        String escapedText = Handlebars.Utils.escapeExpression(context);
        return new Handlebars.SafeString(escapedText.replaceAll(NEW_LINE_REGEX, "<br />\n"));
    }
}
