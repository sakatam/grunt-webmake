/*
 * webmake
 * https://github.com/sakatam/grunt-webmake
 *
 * Copyright (c) 2013 Makoto Sakata
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
  grunt.registerMultiTask('webmake', 'Do webmake.', function() {

    var done = this.async();
    var webmake = require("webmake");
    var options = this.options();

    var iterator = function(file, cb) {
      grunt.log.writeln('Processing "' + file.src + '".');

      if (file.src.length !== 1) {
        grunt.log.error('Please specify single entry file. "' + file.src + '"');
        return cb();
      }

      var path = file.src[0];
      webmake(path, options, function(err, compiled) {
        if (err) {
          grunt.log.error('Error on webmaking "' + path + '": ' + err);
          return cb(err);
        }

        grunt.file.write(file.dest, compiled);
        grunt.log.ok('File "' + file.dest + '" is created.');

        cb();
      });
    };

    grunt.util.async.forEach(this.files, iterator, function(err) {
      done(err ? 3 : 0);
    });

  });
};
