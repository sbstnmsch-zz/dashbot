/* global __dirname */
var path = require('path'),
    srcDir = path.join(__dirname, '..', 'app', 'javascript');

require('blanket')({
  // Only files that match the pattern will be instrumented
  pattern: srcDir
});
