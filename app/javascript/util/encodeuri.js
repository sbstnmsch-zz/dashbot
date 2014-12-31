module.exports = {
  ngProvider: 'filter',
  ngModule: 'filters',
  ngName: 'dashbot.util.encodeuri',
  dependencies: ['$window'],
  fn: function($window) {
    'use strict';

    return $window.encodeURIComponent;
  }
};
