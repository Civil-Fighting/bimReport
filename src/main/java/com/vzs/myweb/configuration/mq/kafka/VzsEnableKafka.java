package com.vzs.myweb.configuration.mq.kafka;

import org.springframework.context.annotation.Import;

import java.lang.annotation.*;

/**
 * Created by byao on 14/08/2017.
 */
@Target({ElementType.TYPE})
@Retention(RetentionPolicy.RUNTIME)
@Documented
@Inherited
@Import({KafkaConfig.class})
public @interface VzsEnableKafka {
}
