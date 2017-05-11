'use strict';

/**
 * The Module Dynamically loads the configurations for
 * the heroku deployed project. This way of managing the configuration
 * is done because of the heroku suggestion for
 * Multiple Environments for the App article.
 */

var url = require('url');

/**
 * Returns the mongo db config for the staging,
 * testing and production servers
 * @returns {*}
 * @private
 */
function __mongoConfig() {
    return process.env.MONGOHQ_URL !== 'undefined' && process.env.MONGOHQ_URL;
}

/**
 * Returns the Redis config object for the staging,
 * testing and production servers
 * @returns {{port: *, host: (*|string), pass: *}}
 * @private
 */
function __redisConfig(){
    if(!process.env.REDISCLOUD_URL || process.env.REDISCLOUD_URL === 'undefined'){
        return null;
    }
    var redisURL = url.parse(process.env.REDISCLOUD_URL);
    return {
        port : redisURL.port,
        host : redisURL.hostname,
        pass : redisURL.auth.split(':')[1]
    };
}

/**
 * Creates a config object dynamically for the application.
 * @returns {*}
 * @private
 */
function __createConfig() {
    var env = process.env.NODE_ENV || 'dev';
    var config = require('./config')[env];

    config.db = __mongoConfig() || config.db;
    config.redis = __redisConfig() || config.redis;

    return config;
}

module.exports = __createConfig();