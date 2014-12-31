/* globals exports */
exports.config = {
  specs: ['e2e/**/*.js'],
  framework: 'mocha',
  mochaOpts: {
    reporter: 'spec',
    timeout: 4000
  },
  multiCapabilities: [
    {
      browserName: 'chrome',
      count: 1,
      shardTestFiles: false,
      maxInstances: 1
    }
  ]
};
