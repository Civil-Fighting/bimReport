package com.vzs.myweb.configuration.handlebar.helper;

import com.github.jknack.handlebars.Handlebars;
import org.apache.commons.lang3.StringEscapeUtils;

/**
 * Created by byao on 5/2/15.
 */
public class AssetHelper {
//    @Autowired
//    VzsMessageSource vzsMessageSource;

    private String assetUrl(String assetPath) {
        return combineAssetUrl("/", assetPath);
    }


    private String combineAssetUrl(final String finalBaseUrl, String assetPath) {
        if (assetPath == null) {
            assetPath = "";
        }
        return finalBaseUrl + assetPath;
    }


    public CharSequence assetScript(String assetPath, Boolean i18n) {
        String assetUrl = assetPath;

//        if (BooleanUtils.isTrue(i18n)) {
//            assetUrl = String.format(assetUrl, vzsMessageSource.getJsLocal());
//        }

        String xmlEscapedAssetUrl = StringEscapeUtils.escapeXml(assetUrl);
        String scriptTag = String.format("<script src=\"%s\" type=\"text/javascript\"></script>", xmlEscapedAssetUrl);

        return new Handlebars.SafeString(scriptTag);
    }

    public CharSequence assetStyle(String assetPath) {
        final String assetUrl = assetUrl(assetPath);

        final String xmlEscapedAssetUrl = StringEscapeUtils.escapeXml10(assetUrl);
        final String styleTag = String.format("<link rel=\"stylesheet\" href=\"%s\" type=\"text/css\" />", xmlEscapedAssetUrl);

        return new Handlebars.SafeString(styleTag);
    }

//    public CharSequence jsI18n() throws IOException {
//        return vzsMessageSource.getJsLocal();
//    }
}
