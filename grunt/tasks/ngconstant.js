/* globals module */
module.exports = {
  options: {
    dest: '<%= paths.src.js %>/config/environment.js',
    name: 'dashbot.config',
    wrap: 'var angular = require("angular"); \n module.exports = {%= __ngModule %}'
  },
  default: {
    constants: {
      'dashbot.config.environment': {
        host: '',
        apiRoot: '/api/',
        apiJsonExtension: '',
        apiHtmlExtension: '',
        templateRoot: '/templates/',
        templateExtension: '.html',
        layoutUrl: '/data/layout.json'
      },
      'dashbot.config.log': {
        enabled: true
      },
      'dashbot.config.ui': {
      }
    }
  }
};
