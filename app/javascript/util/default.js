module.exports = {
  ngProvider: 'filter',
  ngModule: 'filters',
  ngName: 'dashbot.util.default',
  dependencies: ['dashbot.constants.ui'],
  fn: function(constants) {
    'use strict';

    return function(key, fallback) {
      var
        _table = constants,
        _lookUp;

      _lookUp = function(key, fallback) {
        return key || _table.fallbacks[fallback] || _table.fallbacks._otherwise;
      };

      return _lookUp(key, fallback);
    };
  }
};
