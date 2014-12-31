/* globals console */
/**
 * # Notes on this module
 *
 * This module bootstraps an angular application based on
 * components registered and their demands as exported by
 * module.exports.
 *
 * # E.g.
 *
 * A module having the configuration as in:
 *
 * ngProvider: 'controller',
 * ngModule: 'controllers',
 * ngName: 'lst.list.itemcontroller',
 * dependencies: ['$scope'],
 * fn: ...
 *
 * will be registered as a controller provider on the controllers
 * module within angular while being accessible via its ngName. The
 * controller fn and their dependencies will be 'merged' via
 * using the $inject on the fn. In tests one can use the utils.
 *
 * # Additional functionality
 *
 * It will check for duplicate module namings and setup angular
 * modules on demand.
 */
var
  angular = require('exports?angular!angular'),
  _ = require('lodash'),
  Initializer = {},
  _ngRootModule,
  _ngModules = {},
  _ngComponents = {},
  _modules = [],
  log = console,
  _isComponentValid,
  _getModules,
  _initializeModules,
  _initializeComponents;

_isComponentValid = function(ngName, ngModule) {
  'use strict';

  if (ngModule === undefined || ngName === undefined) {
    log.error(
      'Component',
      ngName,
      'can not be registered on',
      ngModule,
      '.'
    );

    return false;
  } else if (_ngComponents[ngName]) {
    log.error(
      'Component',
      ngName,
      'is already registered!'
    );

    return false;
  }

  return true;
};

_getModules = function() {
  'use strict';

  return _.chain(_ngComponents)
          .pluck('ngModule')
          .uniq()
          .value();
};

_initializeModules = function() {
  'use strict';

  _.each(_getModules(), function(ngModule) {
    _ngModules[ngModule] = angular.module(
      _ngRootModule + '.' + ngModule,
      []
    );
  });
};

_initializeComponents = function() {
  'use strict';
  _.each(_ngComponents, function(component) {
    component.fn.$inject = component.dependencies;

    _ngModules[component.ngModule][component.ngProvider](
      component.ngName,
      component.fn
    );
  });
};

Initializer.register = function(component) {
  'use strict';

  if (!_isComponentValid(component.ngName, component.ngModule)) {
    return false;
  }

  _ngComponents[component.ngName] = component;

  return Initializer;
};

Initializer.module = function(ngModule) {
  'use strict';

  _ngRootModule = ngModule;

  return Initializer;
};

Initializer.initialize = function(onComplete) {
  'use strict';
  _initializeModules();
  _initializeComponents();

  onComplete();
};

Initializer.flush = function() {
  'use strict';

  _ngComponents = {};
  _modules = [];
  _ngModules = {};
};

module.exports = Initializer;
