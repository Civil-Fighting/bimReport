package com.vzs.myweb.configuration.handlebar;

import com.github.jknack.handlebars.Handlebars;
import com.github.jknack.handlebars.Jackson2Helper;
import com.github.jknack.handlebars.Template;
import com.github.jknack.handlebars.cache.GuavaTemplateCache;
import com.github.jknack.handlebars.helper.AssignHelper;
import com.github.jknack.handlebars.helper.NumberHelper;
import com.github.jknack.handlebars.io.TemplateSource;
import com.github.jknack.handlebars.springmvc.HandlebarsViewResolver;
import com.google.common.cache.Cache;
import com.google.common.cache.CacheBuilder;
import com.vzs.myweb.configuration.handlebar.helper.*;
import com.vzs.myweb.configuration.handlebar.helper.whenHelper.WhenHelper;
import com.vzs.myweb.util.VzsCollectionUtils;
import com.vzs.myweb.util.VzsDateUtils;
import com.vzs.myweb.util.VzsNumberUtils;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

/**
 * Created by byao on 30/07/2017.
 */
@Slf4j
@Configuration
public class VzsHandlebarsConfig {
    public static final String HANDLEBARS_VIEW_BASE_PATH = "/WEB-INF/views/";
    public static final String HANDLEBARS_VIEW_SUFFIX = ".hbs";
    public static final boolean FAIL_ON_MISSING_FILE = false;

    public static final int ORDER = 1;
    public static final String JSON_HELPER_NAME = "json";
    private static final long MAX_CACHE_SIZE = 1024 * 5;

    //    @Value("${handlebars.pretty.print}")
    private boolean prettyPrint = true;

    //    @Value("${handlebars.caching}")
    private boolean caching = false;

    //    @Value("${handlebars.render.exception}")
    private boolean renderException = true;

    @Autowired(required = false)
    private List<HandlebarsConfigurer> handlebarsConfigurers;

    @Bean
    public HandlebarsViewResolver handlebarsViewResolver() {
        HandlebarsViewResolver viewResolver = new HandlebarsViewResolver();
        viewResolver.setOrder(ORDER);
        viewResolver.setFailOnMissingFile(FAIL_ON_MISSING_FILE);
        viewResolver.setCache(caching);

        viewResolver.setPrefix(HANDLEBARS_VIEW_BASE_PATH);
        viewResolver.setSuffix(HANDLEBARS_VIEW_SUFFIX);

        return viewResolver;
    }


    @Bean
    public Handlebars handlebars(HandlebarsViewResolver handlebarsViewResolver) {
        Handlebars handlebars = handlebarsViewResolver.getHandlebars();
        handlebars.setPrettyPrint(prettyPrint);
        populateTemplateCache(handlebars);
        populateRenderException(handlebars);
        populateDefaultHelpers(handlebars);
        configureHandlebars(handlebars, handlebarsConfigurers);
        return handlebars;
    }

    void populateTemplateCache(Handlebars handlebars) {
        if (!caching) {
            return;
        }

        Cache<TemplateSource, Template> cache = CacheBuilder.newBuilder().maximumSize(MAX_CACHE_SIZE).build();
        GuavaTemplateCache guavaTemplateCache = new GuavaTemplateCache(cache);
        handlebars.with(guavaTemplateCache);
    }

    void populateRenderException(Handlebars handlebars) {
        log.debug("Handlebars renderException : {}", renderException);

        if (renderException) {
            handlebars.registerHelperMissing(new VzsRenderExceptionMissingHelper());
        } else {
            handlebars.registerHelperMissing(new VzsMissingHelper());
        }
    }

    void populateDefaultHelpers(Handlebars handlebars) {
        registerJsonHelper(handlebars);
        registerFormatDateHelper(handlebars);
        registerFormatNumberHelper(handlebars);
        registerAssignHelper(handlebars);
        registerNumberHelper(handlebars);
        registerWhenHelper(handlebars);
        registerDefaultValueHelper(handlebars);
        registerAssignJsonObjectHelper(handlebars);
        registerMapValueHelper(handlebars);
        registerSizeHelper(handlebars);
        registerNewLineToBrHelper(handlebars);
        registerTimesHelper(handlebars);
        registerAssertScript(handlebars);
//        registeri18ntValueHelper(handlebars);
    }

    @Bean
    public AssetHelper assetHelper() {
        return new AssetHelper();
    }

    void registerAssertScript(Handlebars handlebars) {
        handlebars.registerHelpers(assetHelper());
    }

    void registerJsonHelper(Handlebars handlebars) {
        handlebars.registerHelper(JSON_HELPER_NAME, Jackson2Helper.INSTANCE);
    }

    void registerFormatDateHelper(Handlebars handlebars) {
        FormatDateHelper formatDateHelper = new FormatDateHelper();
        formatDateHelper.setDefaultFormat(VzsDateUtils.FORMAT_DATETIME);
        handlebars.registerHelper(FormatDateHelper.HELPER_NAME, formatDateHelper);
    }

    void registerFormatNumberHelper(Handlebars handlebars) {
        FormatNumberHelper formatNumberHelper = new FormatNumberHelper();
        formatNumberHelper.setDefaultFormat(VzsNumberUtils.FORMAT_INTEGER);
        handlebars.registerHelper(FormatNumberHelper.HELPER_NAME, formatNumberHelper);
    }

    void registerAssignHelper(Handlebars handlebars) {
        handlebars.registerHelper(AssignHelper.NAME, AssignHelper.INSTANCE);
    }

    void registerNumberHelper(Handlebars handlebars) {
        NumberHelper.register(handlebars);
    }

    void registerWhenHelper(Handlebars handlebars) {
        WhenHelper.register(handlebars);
    }

    void registerDefaultValueHelper(Handlebars handlebars) {
        handlebars.registerHelper(DefaultValueHelper.HELPER_NAME, new DefaultValueHelper());
    }
//    void registeri18ntValueHelper(Handlebars handlebars) {
//        handlebars.registerHelper(Vzsi18nHelper.HELPER_NAME, vzsi18nHelper());
//    }
//    @Bean
//    public Vzsi18nHelper vzsi18nHelper(){
//        return new Vzsi18nHelper();
//    }

    void registerAssignJsonObjectHelper(Handlebars handlebars) {
        handlebars.registerHelper(AssignJsonObjectHelper.HELPER_NAME, new AssignJsonObjectHelper());
    }

    void registerMapValueHelper(Handlebars handlebars) {
        handlebars.registerHelper(MapValueHelper.HELPER_NAME, new MapValueHelper());
    }

    void registerSizeHelper(Handlebars handlebars) {
        handlebars.registerHelper(SizeHelper.HELPER_NAME, new SizeHelper());
    }

    void registerNewLineToBrHelper(Handlebars handlebars) {
        handlebars.registerHelper(NewLineToBrHelper.HELPER_NAME, new NewLineToBrHelper());
    }

    void registerTimesHelper(Handlebars handlebars) {
        handlebars.registerHelper(TimesHelper.HELPER_NAME, new TimesHelper());
    }

    void configureHandlebars(Handlebars handlebars, List<HandlebarsConfigurer> handlebarsConfigurers) {
        if (VzsCollectionUtils.isEmpty(handlebarsConfigurers)) {
            return;
        }

        for (HandlebarsConfigurer handlebarsConfigurer : handlebarsConfigurers) {
            log.info("Configuring handlebarsConfigurer - {}", handlebarsConfigurer.getClass().getName());
            handlebarsConfigurer.configureHandlebars(handlebars);
        }
    }
}
