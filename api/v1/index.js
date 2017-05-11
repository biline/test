'use strict';
/**
 * This part of the application is responsible for handling the routes api/v1. It delegates
 * the requests mounted on that path to the handlers via express-load.
 */

var path = require('path');
var fs = require('fs');
var express = require('express');
var debug = require('debug')('skeleton-app:api:init');
var app = module.exports = express();


debug('initializing api routes');
var apiRoutesPath = './api/v1/routes';
var routes = fs.readdirSync(apiRoutesPath);

for (var i = routes.length; i--;) {
    var routerPath = path.join(process.cwd(), apiRoutesPath, routes[i]);
    require(routerPath)(app, getHandlerInstance(routerPath));
}


function getHandlerInstance(routerPath) {
    var handlerPath = routerPath.replace('routes', 'handlers');

    return require(handlerPath);
}