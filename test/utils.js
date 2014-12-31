var sinon = require('sinon');

module.exports = {
  injectDependencies: function(component) {
    component.fn.$inject = component.dependencies;

    return component.fn;
  },
  pubsubStub: function() {
    var _callbacks = [];

    return {
      fn: [function() {
        var _publish = sinon.spy();
        var _subscribe = function(topic, callback) {
          _callbacks[topic] = callback;
          _publish(topic, callback);
        };

        return {
          subscribe: _subscribe,
          publish: _publish
        };
      }],
      trigger: function(topic, payload) {
        _callbacks[topic](topic, payload);
      }
    }
  }
}
