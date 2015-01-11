/* globals module */

module.exports = {
  ngProvider: 'directive',
  ngModule: 'directives',
  ngName: 'dashbotVisualGraphDrawer',
  dependencies: ['dashbot.util.template'],
  fn: function(templateFactory) {
    'use strict';

    return {
      restrict: 'E',
      controller: 'dashbot.visuals.graph-drawer-controller',
      templateUrl: templateFactory.url('graph-drawer-visual'),
      scope: {
        values: '='
      },
      link: function() {
      }
    };
  }
};
