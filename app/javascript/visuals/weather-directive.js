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
