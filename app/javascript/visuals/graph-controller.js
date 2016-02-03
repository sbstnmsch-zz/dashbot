/* globals module */

// http://api.geonames.org/findNearByWeatherJSON?lat=43&lng=-2&username=demo

module.exports = {
  ngProvider: 'controller',
  ngModule: 'controllers',
  ngName: 'dashbot.visuals.graph-controller',
  dependencies: [
    '$scope', '$timeout', '$http'
  ],
  fn: function($scope, $timeout, $http) {
    'use strict';

    var _getJson, _draw;

    _getJson = function() {
      var apiURL = $scope.visual.xhr;
      $scope.visual.loading = true;
      $http.get(apiURL)
      .success(function(data) {
        _draw(data || []);
        $timeout(function() {
          $scope.visual.loading = false;
        }, 1000);

        if ($scope.visual.xhrInterval) {
          $timeout(_getJson, $scope.visual.xhrInterval * 1000);
        }
      });
    };

    _draw = function(v) {
      var i = 0;

      $scope.values = v;

      $scope.min = 2000000;
      $scope.max = -2000000;

      for (i = 0; i < $scope.values.length; ++i) {
        if ($scope.values[i] > $scope.max) {
          $scope.max = $scope.values[i];
        } else if ($scope.values[i] < $scope.min) {
          $scope.min = $scope.values[i];
        }
      }

      $scope.delta = $scope.max - $scope.min;
      $scope.stepx = 90 / $scope.values.length;
      $scope.stepy = 50 / $scope.delta;
    };

    if ($scope.visual.visual === 'graph') {
      if ($scope.visual.xhr) {
        _getJson();
      } else {
        $scope.value = $scope.visual.value;
        _draw($scope.value || []);
      }
    }
  }
};
