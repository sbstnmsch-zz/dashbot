/* globals module */
// Karma configuration
// http://karma-runner.github.io/0.12/config/configuration-file.html
// Generated on 2014-10-15 using
// generator-karma 0.8.3

var webDriverConfig = {
      hostname: 'selenium-hub-1',
      port: 4444
    };

module.exports = function(config) {
  'use strict';

  config.set({
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // base path, that will be used to resolve files and exclude
    basePath: '../',

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['mocha'],

    // list of files / patterns to load in the browser
    files: [
      'bower_modules/angular-mocks/angular-mocks.js',
      'bower_modules/jquery/dist/jquery.js',
      'bower_modules/lodash/dist/lodash.js',
      'dist/templates/*.html',
      'test/unit/**/*.js'
    ],

    // Webpack
    preprocessors: {
      'test/**/*.js': ['webpack'],
      'dist/templates/*.html': ['html2js']
    },

    webpack: {
      plugins: [
      ],
      resolve: {
        alias: {
        },
        modulesDirectories: [
          'bower_modules/',
          'node_modules/',
          'app/javascript/',
          'bower_modules/mui-common-js/dist/javascript/',
          'test'
        ]
      },
      externals: {
        angular: 'angular',
        // fs: A simple stub to avoid webpack errors. fs is only required for mocha runs.
        fs: 'null',
        jQuery: 'jQuery',
        lodash: '_'
      },
      module: {
        loaders: [{
          // A stupid hack required for sinon so that it knows it is not running in AMD
          test: /sinon.*\.js$/,
          loader: 'imports?define=>false'
        }, {
          test: /\.json/,
          loader: 'json-loader'
        }]
      }
    },

    ngHtml2JsPreprocessor: {
      moduleName: 'templates'
    },

    // list of files / patterns to exclude
    exclude: [],

    // web server port
    port: 8080,

    customLaunchers: {
      IE11: {
        base: 'WebDriver',
        config: webDriverConfig,
        browserName: 'internet explorer',
        version: '11',
        name: 'IE11:Windows 7'
      },
      IE10: {
        base: 'WebDriver',
        config: webDriverConfig,
        browserName: 'internet explorer',
        version: '10',
        name: 'IE10:Windows 7'
      },
      IE9: {
        base: 'WebDriver',
        config: webDriverConfig,
        browserName: 'internet explorer',
        version: '9',
        name: 'IE9:Windows 7'
      },
      IE8: {
        base: 'WebDriver',
        config: webDriverConfig,
        browserName: 'internet explorer',
        version: '8',
        name: 'IE8:Windows 7'
      },
      RemoteChrome: {
        base: 'WebDriver',
        config: webDriverConfig,
        browserName: 'chrome',
        name: 'Chrome:Windows 7'
      },
      RemoteFirefox: {
        base: 'WebDriver',
        config: webDriverConfig,
        browserName: 'firefox',
        name: 'Firefox:Windows 7'
      }
    },

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - IE (only Windows)
    browsers: [
      'Chrome'
    ],

    // Which plugins to enable
    plugins: [
      'karma-html2js-preprocessor',
      'karma-webpack',
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-safari-launcher',
      'karma-webdriver-launcher',
      'karma-teamcity-reporter',
      'karma-mocha'
    ],

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,

    colors: true,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO

    // Uncomment the following lines if you are using grunt's server to run the tests
    // proxies: {
    //   '/': 'http://localhost:9000/'
    // },
    // URL root prevent conflicts with the site root
    // urlRoot: '_karma_'
  });
};
