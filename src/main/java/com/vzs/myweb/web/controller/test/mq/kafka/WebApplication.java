package com.vzs.myweb.web.controller.test.mq.kafka;

/**
 * Created by byao on 13/08/2017.
 */
public class WebApplication {
//    public static void main(final String[] args) throws Exception {
//        Properties config = new Properties();
//        config.put(StreamsConfig.APPLICATION_ID_CONFIG, "wordcount-application");
//        config.put(StreamsConfig.BOOTSTRAP_SERVERS_CONFIG, "kafka-broker1:9092");
//        config.put(StreamsConfig.DEFAULT_KEY_SERDE_CLASS_CONFIG, Serdes.String().getClass());
//        config.put(StreamsConfig.DEFAULT_VALUE_SERDE_CLASS_CONFIG, Serdes.String().getClass());
//
//        KStreamBuilder builder = new KStreamBuilder();
//        KStream<String, String> textLines = builder.stream("TextLinesTopic");
//        KTable<String, Long> wordCounts = textLines
//                .flatMapValues(new ValueMapper<String, Iterable<String>>() {
//                    @Override
//                    public Iterable<String> apply(String textLine) {
//                        return Arrays.asList(textLine.toLowerCase().split("\\W+"));
//                    }
//                })
//                .groupBy(new KeyValueMapper<String, String, String>() {
//                    @Override
//                    public String apply(String key, String word) {
//                        return word;
//                    }
//                })
//                .count("Counts");
//        wordCounts.to(Serdes.String(), Serdes.Long(), "WordsWithCountsTopic");
//
//        KafkaStreams streams = new KafkaStreams(builder, config);
//        streams.start();
//    }

}
