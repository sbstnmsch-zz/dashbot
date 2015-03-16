/* globals module */

// http://api.geonames.org/findNearByWeatherJSON?lat=43&lng=-2&username=demo

module.exports = {
  ngProvider: 'controller',
  ngModule: 'controllers',
  ngName: 'dashbot.visuals.buildchain-controller',
  dependencies: [
    '$scope', '$timeout', '$http'
  ],
  fn: function($scope, $timeout, $http) {
    'use strict';

    var
    _format = function() {

    },

    _getJson = function() {
      var
        apiURL = $scope.visual.xhr,
        i,
        build = true;

      $scope.visual.loading = true;
      $http.get(apiURL)
        .success(function(data) { // jshint ignore:line

          $scope.visual.since = new Date();
          for (i=0; i < data.length; ++i) {
            if (data[i].status === 'failure') {
              build = false;
              $scope.visual.failures = data;
              i = data.length;
            }
          }

          $scope.visual.build = build ? 'green' : 'red';

          $timeout(function() {
            $scope.visual.loading = false;
          }, 1000);

          if ($scope.visual.xhrInterval) {
            $timeout(_getJson, $scope.visual.xhrInterval * 1000);
          }
        });
    };

    if ($scope.visual.visual === 'buildchain') {
      if ($scope.visual.xhr) {
        _getJson();
      }
    }
  }
};
