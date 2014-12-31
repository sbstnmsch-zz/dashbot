/* globals module */
module.exports = {
  local: {
    options: {
      configFile: 'test/protractor.conf.js',
      keepAlive: false,
      noColor: false,
      args: {
      }
    }
  },
  ci: {
    options: {
      configFile: 'test/protractor.conf.js',
      keepAlive: false,
      noColor: false,
      args: {
        seleniumAddress: 'selenium-hub-1.tld'
      }
    }
  }

};
