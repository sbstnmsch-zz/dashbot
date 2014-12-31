module.exports = {
  test: {
    src: '<%= paths.test.mocha %>',
    options: {
      reporter: 'spec',
      require: [
        'coverage/blanket',
        'test/mocha',
        'bower_modules/angular/angular.js',
        'bower_modules/angular-mocks/angular-mocks.js'
      ]
    }
  },
  'ci-test': {
    src: '<%= paths.test.mocha %>',
    options: {
      reporter: 'mocha-teamcity-reporter',
      require: [
        'coverage/blanket',
        'test/mocha',
        'bower_modules/angular/angular.js',
        'bower_modules/angular-mocks/angular-mocks.js'
      ]
    }
  },
  coverage: {
    src: '<%= paths.test.mocha %>',
    options: {
      reporter: 'html-cov',
      // use the quiet flag to suppress the mocha console output
      quiet: true,
      // the destination file to capture the mocha
      // output (the quiet option does not suppress this)
      captureFile: 'coverage/coverage.html'
    }
  },
  // The travis-cov reporter will fail the tests if the
  // coverage falls below the threshold configured in package.json
  'coverage-threshold': {
    src: '<%= paths.test.mocha %>',
    options: {
      reporter: 'travis-cov'
    }
  }
};
