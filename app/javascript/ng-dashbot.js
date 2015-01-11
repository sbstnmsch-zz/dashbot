require('config/environment');
var
    ngApp = require('ng-app.json'),
    initializer = require('initializer'),
    ngModule;

initializer
  .module(ngApp.ngModule)
  .register(require('config/ui-constants'))
  .register(require('dashbot/controller'))
  .register(require('visuals/number-controller'))
  .register(require('visuals/number-directive'))
  .register(require('visuals/graph-controller'))
  .register(require('visuals/graph-directive'))
  .register(require('visuals/graph-drawer-controller'))
  .register(require('visuals/graph-drawer-directive'))
  .register(require('visuals/weather-controller'))
  .register(require('visuals/weather-directive'))
  .register(require('util/encodeuri'))
  .register(require('util/endpoint'))
  .register(require('util/template'))
  .initialize(function() {
    'use strict';

    ngModule = angular.module(ngApp.ngModule, [
      'dashbot.config',
      'dashbot.constants',
      'dashbot.filters',
      'dashbot.factories',
      'dashbot.directives',
      'dashbot.controllers'
    ])
    .config(require('config/log'))
    .config(function($httpProvider) {
      //Enable cross domain calls
      $httpProvider.defaults.useXDomain = true;
    });
  });

module.exports = ngModule;
