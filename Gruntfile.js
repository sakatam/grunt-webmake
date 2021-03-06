/*
 * webmake
 * https://github.com/sakatam/grunt-webmake
 *
 * Copyright (c) 2013 Makoto Sakata
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>',
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp'],
    },

    // Configuration to be run (and then tested).
    webmake: {
      default_options: {
        files: {
          'tmp/compiled.js': ['test/fixtures/index.js'],
        },
      },
      missing_file: {
        files: {
          'tmp/missing_file.js': ['test/fixtures/index_missing.js'],
        },
      },
      multiple_entry_files: {
        files: {
          'tmp/multiple_entry_files.js': ['test/fixtures/required.js', 'test/fixtures/index.js'],
        },
      },
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js'],
    },

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'webmake', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
