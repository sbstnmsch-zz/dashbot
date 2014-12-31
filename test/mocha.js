/* global global */
var jsdom = require('jsdom').jsdom,
    document = jsdom('<html><head><script></script></head><body></body></html>'),
    window = document.parentWindow;

window.mocha = true;
window.beforeEach = function(callback) {
  'use strict';
  window.angularMocksBeforeEach = callback;
};
window.afterEach = function(callback) {
  'use strict';
  window.angularMocksAfterEach = callback;
};
global.document = document;
global.window = window;
