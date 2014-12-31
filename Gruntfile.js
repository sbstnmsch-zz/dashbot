/* globals module, process, require */
/**
 * # Notes on this Gruntfile
 *
 * ## Conventions
 *
 * 1. Tasks passed into grunt's initConfig should be camelCased
 * 2. Aggregate tasks registered at grunt should be dash-separated
 *    - Both to improve readability within the Gruntfile
 *
 * ## Works & Intentions
 *
 * - This Gruntfile is only < 100 LoC cause tasks are located under `grunt/tasks`
 *   and options under `grunt/options`
 *    - Files from both locations are passed and parsed by `load-grunt-config`
 * - Grunt's aliases (teh tasks which are normally ran from the CLI) are in
 *   `grunt/aliases.json`
 *    - These are also automagically registered by `load-grunt-config`
 *
 * - The file makes heavy use of copying everything from a src to a dist
 *    - Configurable through the `grunt/options/paths.json` (dev entry)
 *    - Every subsequent task will be performed on the copied files
 * - Files on which operations are completed are copied into `paths.dist.[js|css|images]`
 *    - The folder will be cleaned up before a new grunt-run
 * - Whenever all tasks completed the `paths.dev`-folders will be cleaned up depending
 *   on the stage-option passed to grunt is set to `dev`
 *    - For peace of mind grunt cleans up behind itself by default and the `--stage=dev`
 *      has to be explicitly set
 *    - Reasoned in source maps pointing to files within the `dev`-folder which shall
 *      not be served in production environments
 */
module.exports = function(grunt) {

  'use strict';

  require('time-grunt')(grunt);

  var path = require('path');

  require('load-grunt-config')(grunt, {
    configPath: path.join(process.cwd(), 'grunt', 'tasks'),
    init: true,
    data: {
      // options: {
      //   hostname: grunt.option('hostname'),
      //   browsers: grunt.option('browsers')
      // },
      webpack: grunt.option('webpack') || '',
      paths: require(path.join(process.cwd(), 'grunt', 'options/') + 'paths.json')
    },
    loadGruntTasks: {
      config: require('./package.json'),
      scope: 'devDependencies'
    },
    postProcess: function() {}
  });

};
