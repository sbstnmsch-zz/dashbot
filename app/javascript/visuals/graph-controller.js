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

    if ($scope.visual.visual === 'graph') {
      if ($scope.visual.xhr) {
        _getJson();
      } else {
        $scope.value = $scope.visual.value;
      }
    }
  }
};
