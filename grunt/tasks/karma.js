module.exports = function(grunt) {
  'use strict';

  return {
    options: {
      configFile: 'test/karma.conf.js',
      hostname: grunt.option('hostname') ? grunt.option('hostname') : 'localhost'
    },
    local: {
      browsers: grunt.option('browsers') ? grunt.option('browsers').split(',') : ['Chrome'],
      singleRun: false
    },
    test: {
      browsers: [
        'IE11',
        'IE10',
        'IE9',
        'RemoteChrome',
        'RemoteFirefox'
      ],
      singleRun: true
    },
    'ci-test': {
      browsers: [
        'IE11',
        'IE10',
        'IE9',
        'RemoteChrome',
        'RemoteFirefox'
      ],
      reporters: ['teamcity'],
      singleRun: true
    }
  };
};
