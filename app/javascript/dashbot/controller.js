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
      $scope.grid = [];
    });

  }
};
