import { createClient } from "redis";
import debug from "debug"

import { helpersErrorHandler } from "./errorHandlers"
import { initRedisPublisherFailed, initRedisSubscriberFailed } from "../lang/redis/errors";

const debugLog = debug("redis.ts");
const errorLog = debug("redis.ts:error");


// redis-server is supposed to be active on local port 6379.

const redisPublisher = createClient();

redisPublisher.on('error', (err) => errorLog("Redis publisher client error!", err));

redisPublisher.connect().then(() => {
    debugLog("publisher is connected");

    setTimeout(() =>
        redisPublisher.publish("test", "I am a test message!"), 
        3000
    )

}).catch(err => {
    helpersErrorHandler(err, initRedisPublisherFailed, errorLog)
});


const redisSubscriber = createClient();

redisSubscriber.on('error', (err) => errorLog("Redis subscriber client error!", err));

redisSubscriber.connect().then(() => {
    debugLog("subscriber is connected");

    redisSubscriber.subscribe("test", msg => {
        debugLog("Got a message:", msg);
    });
}).catch(err => {
    helpersErrorHandler(err, initRedisSubscriberFailed, errorLog)
});




