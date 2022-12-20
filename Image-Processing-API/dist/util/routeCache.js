"use strict";
var NodeChache = require('node-cache');
var cache = new NodeChache();
module.exports = function (duration) { return function (req, res, next) {
    // check if request is get, if not call next
    if (req.method != 'GET') {
        console.error('Cannot cache no-GET methods');
        return next();
    }
    // check if the key exists in cache
    var key = req.originalUrl;
    var cachedResponse = cache.get(key);
    // if it exists, send cached results
    if (cachedResponse) {
        console.log("cache for ".concat(key, " hit"));
    }
    else {
        //if not replace send with method to set response to cache
        console.log("Cache miss for ".concat(key));
        res.originalSend = res.send;
        res.send = function (body) {
            res.originalSend(body);
            cache.set(key, body, duration);
        };
        next();
    }
    console.log(key);
}; };
