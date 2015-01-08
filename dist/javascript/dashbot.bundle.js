/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(2);
	var
	    ngApp = __webpack_require__(13),
	    initializer = __webpack_require__(1),
	    ngModule;
	
	initializer
	  .module(ngApp.ngModule)
	  .register(__webpack_require__(3))
	  .register(__webpack_require__(5))
	  .register(__webpack_require__(6))
	  .register(__webpack_require__(7))
	  .register(__webpack_require__(8))
	  .register(__webpack_require__(9))
	  .register(__webpack_require__(10))
	  .register(__webpack_require__(11))
	  .register(__webpack_require__(12))
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
	    .config(__webpack_require__(4))
	    .config(function($httpProvider) {
	      //Enable cross domain calls
	      $httpProvider.defaults.useXDomain = true;
	    });
	  });
	
	module.exports = ngModule;


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

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
	  angular = __webpack_require__(14),
	  _ = __webpack_require__(15),
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


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var angular = __webpack_require__(14); 
	 module.exports = angular.module('dashbot.config', [])
	
	.constant('dashbot.config.environment', {host:'',apiRoot:'/dashbot/',apiJsonExtension:'',apiHtmlExtension:'',mockApiRoot:'/internal/mock/',mockApiExtension:'',templateRoot:'dist/templates/',templateExtension:'.html',layoutUrl:'/layout.json'})
	
	.constant('dashbot.config.log', {enabled:false})
	
	.constant('dashbot.config.ui', {})
	
	;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  ngProvider: 'constant',
	  ngModule: 'constants',
	  ngName: 'dashbot.constants.ui',
	  dependencies: [],
	  fn: {
	  }
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = [
	  '$logProvider', 'dashbot.config.log',
	  function($logProvider, log) {
	    'use strict';
	    // note that this method only enables/disables
	    // console.log.debug, not info, etc.!
	    $logProvider.debugEnabled(log.enabled);
	  }
	];


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/* globals module */
	module.exports = {
	  ngProvider: 'controller',
	  ngModule: 'controllers',
	  ngName: 'dashbot.controller',
	  dependencies: [
	    '$scope', '$http', 'dashbot.util.endpoint'
	  ],
	  fn: function($scope, $http, endpoint) {
	    'use strict';
	
	    $scope.grid = [];
	
	    $http.get(
	      endpoint.layoutUrl(),
	      {
	        transformResponse: function(data) {
	          try {
	            return JSON.parse(data);
	          } catch (e) {
	            return [];
	          }
	        }
	      }
	    )
	    .success(function(data) {
	      $scope.grid = data;
	    })
	    .error(function() {
	      $scope.grid = [[{ visual: 'number', value: 'Missing layout' }]];
	    });
	
	  }
	};


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/* globals module */
	
	// http://api.geonames.org/findNearByWeatherJSON?lat=43&lng=-2&username=demo
	
	module.exports = {
	  ngProvider: 'controller',
	  ngModule: 'controllers',
	  ngName: 'dashbot.visuals.number-controller',
	  dependencies: [
	    '$scope', '$timeout', '$http'
	  ],
	  fn: function($scope, $timeout, $http) {
	    'use strict';
	
	    var _getJson = function() {
	      var apiURL = $scope.visual.xhr;
	      $scope.visual.loading = true;
	      $http.get(apiURL)
	        .success(function(data) { // jshint ignore:line
	          $scope.value = eval('data.' + $scope.visual.xhrValue); // jshint ignore:line
	
	          if ($scope.visual.green && $scope.visual.red) {
	            $scope.visual.build = eval( // jshint ignore:line
	              $scope.value + $scope.visual.green + '? "green" : (' +
	              $scope.value + $scope.visual.red + ' ? "red" : "none") '
	            );
	          }
	
	          $timeout(function() {
	            $scope.visual.loading = false;
	          }, 1000);
	          if ($scope.visual.xhrInterval) {
	            $timeout(_getJson, $scope.visual.xhrInterval * 1000);
	          }
	        });
	    };
	
	    if ($scope.visual.visual === 'number') {
	      if ($scope.visual.xhr) {
	        _getJson();
	      } else {
	        $scope.value = $scope.visual.value;
	      }
	    }
	  }
	};


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/* globals module */
	
	module.exports = {
	  ngProvider: 'directive',
	  ngModule: 'directives',
	  ngName: 'dashbotVisualNumber',
	  dependencies: ['dashbot.util.template'],
	  fn: function(templateFactory) {
	    'use strict';
	
	    return {
	      restrict: 'E',
	      controller: 'dashbot.visuals.number-controller',
	      templateUrl: templateFactory.url('number-visual'),
	      scope: {
	        visual: '='
	      },
	      link: function() {
	      }
	    };
	  }
	};


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/* globals module */
	
	module.exports = {
	  ngProvider: 'controller',
	  ngModule: 'controllers',
	  ngName: 'dashbot.visuals.weather-controller',
	  dependencies: [
	    '$scope', '$timeout', '$http'
	  ],
	  fn: function($scope, $timeout, $http) {
	    'use strict';
	
	    var _getWeather = function() {
	      var apiURL = 'http://api.openweathermap.org/data/2.5/weather?lang=en&q=' + $scope.visual.city;
	      $scope.visual.loading = true;
	      $http.get(apiURL)
	        .success(function(weather) {
	
	          $timeout(function() {
	            $scope.visual.loading = false;
	          }, 1000);
	
	          if ($scope.visual.unit === 'c') {
	            $scope.temperature = Math.round(weather.main.temp - 273.15);
	            $scope.unit = 'c';
	          } else {
	            $scope.temperature = Math.round(((weather.main.temp - 273.15) * 1.8) + 32);
	            $scope.unit = 'f';
	          }
	
	          $scope.value = $scope.temperature;
	
	          if ($scope.visual.green && $scope.visual.red) {
	            $scope.visual.build = eval( // jshint ignore:line
	              $scope.value + $scope.visual.green + '? "green" : (' +
	              $scope.value + $scope.visual.red + ' ? "red" : "none") '
	            );
	          }
	
	          if (weather.name) {
	            $scope.city = weather.name;
	          }
	          $timeout(_getWeather, 15 * 60000);
	        });
	    };
	
	    if ($scope.visual.visual === 'weather') {
	      _getWeather();
	    }
	  }
	};


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/* globals module */
	
	module.exports = {
	  ngProvider: 'directive',
	  ngModule: 'directives',
	  ngName: 'dashbotVisualWeather',
	  dependencies: ['dashbot.util.template'],
	  fn: function(templateFactory) {
	    'use strict';
	
	    return {
	      restrict: 'E',
	      controller: 'dashbot.visuals.weather-controller',
	      templateUrl: templateFactory.url('weather-visual'),
	      scope: {
	        visual: '='
	      },
	      link: function() {
	      }
	    };
	  }
	};


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  ngProvider: 'filter',
	  ngModule: 'filters',
	  ngName: 'dashbot.util.encodeuri',
	  dependencies: ['$window'],
	  fn: function($window) {
	    'use strict';
	
	    return $window.encodeURIComponent;
	  }
	};


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  ngProvider: 'factory',
	  ngModule: 'factories',
	  ngName: 'dashbot.util.endpoint',
	  dependencies: ['dashbot.config.environment', '$sce'],
	  fn: function(environment, $sce) {
	    'use strict';
	
	    var
	      factoryInterface = {},
	      _interpolateUrlAsJson = null,
	      _interpolateUrlAsHtml = null,
	      _interpolateMockUrl = null;
	
	    _interpolateUrlAsJson = function(resource) {
	      return $sce.trustAsResourceUrl(
	        factoryInterface.getRoot() +
	        resource +
	        factoryInterface.getJsonExtension()
	      );
	    };
	
	    _interpolateUrlAsHtml = function(resource) {
	      return $sce.trustAsResourceUrl(
	        factoryInterface.getRoot() +
	        resource +
	        factoryInterface.getHtmlExtension()
	      );
	    };
	
	    factoryInterface.getRoot = function() {
	      return environment.host + environment.apiRoot;
	    };
	
	    factoryInterface.getJsonExtension = function() {
	      return environment.apiJsonExtension;
	    };
	
	    factoryInterface.getHtmlExtension = function() {
	      return environment.apiHtmlExtension;
	    };
	
	    factoryInterface.layoutUrl = function() {
	      return environment.layoutUrl;
	    };
	
	    /* Endpoints for mocked data */
	
	    _interpolateMockUrl = function(resource) {
	      return $sce.trustAsResourceUrl(
	        factoryInterface.getMockRoot() +
	        resource +
	        factoryInterface.getMockExtension()
	      );
	    };
	
	    factoryInterface.getMockRoot = function() {
	      return environment.host + environment.mockApiRoot;
	    };
	
	    factoryInterface.getMockExtension = function() {
	      return environment.mockApiExtension;
	    };
	
	    return factoryInterface;
	  }
	};


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  ngProvider: 'factory',
	  ngModule: 'factories',
	  ngName: 'dashbot.util.template',
	  dependencies: ['dashbot.config.environment', '$sce'],
	  fn: function(environment, $sce) {
	    'use strict';
	
	    var
	      factoryInterface = {},
	      _interpolateUrl  = null;
	
	    _interpolateUrl = function(template) {
	      return factoryInterface.getRoot() + template + factoryInterface.getExtension();
	    };
	
	    factoryInterface.getRoot = function() {
	      return environment.host + environment.templateRoot;
	    };
	
	    factoryInterface.getExtension = function() {
	      return environment.templateExtension;
	    };
	
	    factoryInterface.url = function(template) {
	      return $sce.trustAsResourceUrl(
	        _interpolateUrl(template)
	      );
	    };
	
	    return factoryInterface;
	  }
	};


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
		"version": "0.0.1",
		"ngModule": "dashbot",
		"components": []
	}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = angular;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = _;

/***/ }
/******/ ])
//# sourceMappingURL=dashbot.bundle.js.map