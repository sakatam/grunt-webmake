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

    var options = this.options({
      punctuation: '.',
      separator: ', '
    });

    var iterator = function(file, cb) {
      if (file.src.length > 1) {
        grunt.log.warn('Source file "' + file.src + '" cannot be an array.');
        return cb();
      }

      var path = file.src[0];
      if (!grunt.file.exists(path)) {
        grunt.log.warn('Source file "' + path + '" not found.');
        return cb();
      }

      webmake(path, function(err, compiled) {
        if (err) {
          grunt.log.error('Error on webmaking "' + path + '": ' + err);
          return cb(err);
        }
        grunt.file.write(file.dest, compiled);
        grunt.log.writeln('File "' + file.dest + '" created.');
        cb();
      });
    };

    grunt.util.async.forEach(this.files, iterator, function(err) {
      done(err ? 3 : 0);
    });

  });
};
