module.exports = {
  ngProvider: 'filter',
  ngModule: 'filters',
  ngName: 'dashbot.util.constant',
  dependencies: ['dashbot.constants.ui'],
  fn: function(constants) {
    'use strict';

    return function(constant, fallback) {
      var
        _table = constants,
        _lookUp;

      _lookUp = function(constant, fallback) {
        return _table[constant] || _table.fallbacks[fallback] || _table.fallbacks._otherwise;
      };

      return _lookUp(constant, fallback);
    };
  }
};
