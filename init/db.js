'use strict';
/**
 * Initializes the database instance.
 * @author Alexander Adamyan
 */

//var fs = require('fs');
//var mongoose = require('mongoose');

var dbInitialized = false;

/**
 * Initialize Database connection
 * @param  {Object} config current environment configuration
 * @param forceNoDebug
 */
exports.init = function (config, forceNoDebug) {
    //Preventing the module to be initialize more than one time
    /*if (dbInitialized) {
        return;
    }
    dbInitialized = true;

    //Connecting to the databas
    //mongoose.connect(config.db);

    //Set debug mode for dev environment
    var env = process.env.NODE_ENV || 'dev';
    if (env === 'dev' && !forceNoDebug) {
        mongoose.set('debug', true);
    }

    //Init model schemas
    var schemasPath = process.cwd() + '/schemas';
    var schemaFiles = fs.readdirSync(schemasPath);

    schemaFiles.forEach(function (file) {
        require(schemasPath + '/' + file);
    });*/
};