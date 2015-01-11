/* globals module */

// http://api.geonames.org/findNearByWeatherJSON?lat=43&lng=-2&username=demo

module.exports = {
  ngProvider: 'controller',
  ngModule: 'controllers',
  ngName: 'dashbot.visuals.graph-drawer-controller',
  dependencies: [
    '$scope'
  ],
  fn: function($scope) {
    'use strict';

    var i = 0;

    $scope.min = 2000000;
    $scope.max = -2000000;

    for (i = 0;i < $scope.values.length; ++i) {
      if ($scope.values[i] > $scope.max) {
        $scope.max = $scope.values[i];
      } else if ($scope.values[i] < $scope.min) {
        $scope.min = $scope.values[i];
      }
    }

    $scope.delta = $scope.max - $scope.min;
    $scope.stepx = 90 / $scope.values.length;
    $scope.stepy = 50 / $scope.delta;
  }
};
