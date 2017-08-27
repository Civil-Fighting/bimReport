package com.vzs.myweb.configuration.mq.kafka;

import lombok.extern.slf4j.Slf4j;
import org.springframework.kafka.annotation.KafkaListener;

import java.util.concurrent.CountDownLatch;

/**
 * Created by byao on 14/08/2017.
 */
@Slf4j
public class MyReceiver {

    private CountDownLatch latch = new CountDownLatch(1);

    public CountDownLatch getLatch() {
        return latch;
    }


    @KafkaListener(topics = "bentopictest")
    public void receive(String payload) {
        log.info("received payload='{}'", payload);
        latch.countDown();
    }
}
