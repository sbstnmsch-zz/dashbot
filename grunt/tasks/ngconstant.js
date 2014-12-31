/* globals module */
module.exports = {
  options: {
    dest: '<%= paths.src.js %>/config/environment.js',
    name: 'dashbot.config',
    wrap: 'var angular = require("exports?angular!angular"); \n module.exports = {%= __ngModule %}'
  },
  dist: {
    constants: {
      'dashbot.config.environment': {
        host: '',
        apiRoot: '/dashbot/',
        apiJsonExtension: '',
        apiHtmlExtension: '',
        mockApiRoot: '/internal/mock/',
        mockApiExtension: '',
        templateRoot: '/dashbot/templates/',
        templateExtension: '.html',
        layoutUrl: '/examples/layout.json'
      },
      'dashbot.config.log': {
        enabled: false
      },
      'dashbot.config.ui': {
      }
    }
  },
  local: {
    constants: {
      'dashbot.config.environment': {
        host: '//localhost:9501',
        apiRoot: '/dist/mocks/',
        apiJsonExtension: '.json',
        apiHtmlExtension: '.html',
        mockApiRoot: '/dist/mocks/',
        mockApiExtension: '.json',
        templateRoot: '/dist/templates/',
        templateExtension: '.html',
        layoutUrl: '/examples/layout.json'
      },
      'dashbot.config.log': {
        enabled: true
      },
      'dashbot.config.ui': {
      }
    }
  },
  test: {
    constants: {
      'dashbot.config.environment': {
        host: '',
        apiRoot: '/dist/mocks/',
        apiJsonExtension: '.json',
        apiHtmlExtension: '.html',
        mockApiRoot: '/dist/mocks/',
        mockApiExtension: '.json',
        templateRoot: 'dist/templates/',
        templateExtension: '.html',
        layoutUrl: '/examples/layout.json'
      },
      'dashbot.config.log': {
        enabled: true
      },
      'dashbot.config.ui': {
      }
    }
  }
};
