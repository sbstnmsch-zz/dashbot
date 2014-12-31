module.exports = {
  ngProvider: 'filter',
  ngModule: 'filters',
  ngName: 'dashbot.util.interpolate',
  dependencies: ['version'],
  fn: function(version) {
    'use strict';

    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    };
  }
};
