/* globals module */

// http://api.geonames.org/findNearByWeatherJSON?lat=43&lng=-2&username=demo

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
      var apiURL = 'http://api.openweathermap.org/data/2.5/weather?lang=en&q=berlin';
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
