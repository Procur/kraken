module.exports = gruntConfig;

function gruntConfig(grunt) {
  'use strict';

  var
    pkg = grunt.file.readJSON('package.json');

  grunt.initConfig({
    srcPath: './src/sass',
    distPath: './dist/css',

    sass: require('./Grunt/sass')
  });

  for(var task in pkg.devDependencies) {
    if (task !== 'grunt' && !task.indexOf('grunt')) {
      grunt.loadNpmTasks(task);
    }
  }

  grunt.registerTask('default', ['sass:dist', 'sass:distMin']);

}