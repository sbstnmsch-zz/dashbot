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
