module.exports = {
  ngProvider: 'factory',
  ngModule: 'factories',
  ngName: 'dashbot.util.template',
  dependencies: ['dashbot.config.environment', '$sce'],
  fn: function(environment, $sce) {
    'use strict';

    var
      factoryInterface = {},
      _interpolateUrl  = null;

    _interpolateUrl = function(template) {
      return factoryInterface.getRoot() + template + factoryInterface.getExtension();
    };

    factoryInterface.getRoot = function() {
      return environment.host + environment.templateRoot;
    };

    factoryInterface.getExtension = function() {
      return environment.templateExtension;
    };

    factoryInterface.url = function(template) {
      return $sce.trustAsResourceUrl(
        _interpolateUrl(template)
      );
    };

    return factoryInterface;
  }
};
