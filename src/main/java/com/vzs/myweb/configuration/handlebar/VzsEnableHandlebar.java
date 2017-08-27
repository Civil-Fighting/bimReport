package com.vzs.myweb.configuration.handlebar;

import org.springframework.context.annotation.Import;

import java.lang.annotation.*;

/**
 * Created by byao on 30/07/2017.
 */
@Target({ElementType.TYPE})
@Retention(RetentionPolicy.RUNTIME)
@Documented
@Inherited
@Import({VzsHandlebarsConfig.class})
public @interface VzsEnableHandlebar {
}
