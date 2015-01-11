/* globals module */

module.exports = {
  ngProvider: 'directive',
  ngModule: 'directives',
  ngName: 'dashbotVisualGraph',
  dependencies: ['dashbot.util.template'],
  fn: function(templateFactory) {
    'use strict';

    return {
      restrict: 'E',
      controller: 'dashbot.visuals.graph-controller',
      templateUrl: templateFactory.url('graph-visual'),
      scope: {
        visual: '='
      },
      link: function() {
      }
    };
  }
};
