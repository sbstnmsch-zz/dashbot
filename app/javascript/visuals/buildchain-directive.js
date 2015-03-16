/* globals module */

module.exports = {
  ngProvider: 'directive',
  ngModule: 'directives',
  ngName: 'dashbotVisualBuildchain',
  dependencies: ['dashbot.util.template'],
  fn: function(templateFactory) {
    'use strict';

    return {
      restrict: 'E',
      controller: 'dashbot.visuals.buildchain-controller',
      templateUrl: templateFactory.url('buildchain-visual'),
      scope: {
        visual: '='
      },
      link: function() {
      }
    };
  }
};
