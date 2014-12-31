module.exports = {
  ngProvider: 'factory',
  ngModule: 'factories',
  ngName: 'dashbot.util.endpoint',
  dependencies: ['dashbot.config.environment', '$sce'],
  fn: function(environment, $sce) {
    'use strict';

    var
      factoryInterface = {},
      _interpolateUrlAsJson = null,
      _interpolateUrlAsHtml = null,
      _interpolateMockUrl = null;

    _interpolateUrlAsJson = function(resource) {
      return $sce.trustAsResourceUrl(
        factoryInterface.getRoot() +
        resource +
        factoryInterface.getJsonExtension()
      );
    };

    _interpolateUrlAsHtml = function(resource) {
      return $sce.trustAsResourceUrl(
        factoryInterface.getRoot() +
        resource +
        factoryInterface.getHtmlExtension()
      );
    };

    factoryInterface.getRoot = function() {
      return environment.host + environment.apiRoot;
    };

    factoryInterface.getJsonExtension = function() {
      return environment.apiJsonExtension;
    };

    factoryInterface.getHtmlExtension = function() {
      return environment.apiHtmlExtension;
    };

    factoryInterface.layoutUrl = function() {
      return environment.layoutUrl;
    };

    /* Endpoints for mocked data */

    _interpolateMockUrl = function(resource) {
      return $sce.trustAsResourceUrl(
        factoryInterface.getMockRoot() +
        resource +
        factoryInterface.getMockExtension()
      );
    };

    factoryInterface.getMockRoot = function() {
      return environment.host + environment.mockApiRoot;
    };

    factoryInterface.getMockExtension = function() {
      return environment.mockApiExtension;
    };

    return factoryInterface;
  }
};
