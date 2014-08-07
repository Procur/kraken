module.exports = gruntConfig;

function gruntConfig(grunt) {
  'use strict';

  var
    pkg = grunt.file.readJSON('package.json');

  grunt.initConfig({
    srcPath: './src/sass',
    distPath: './dist/css',

    sass: require('./Grunt/sass'),
    watch: require('./Grunt/watch'),
    copy: require('./Grunt/copy')
  });

  for(var task in pkg.devDependencies) {
    if (task !== 'grunt' && !task.indexOf('grunt')) {
      grunt.loadNpmTasks(task);
    }
  }

  grunt.registerTask('build:assets', ['sass:dist', 'sass:distMin', 'copy:fonts', 'copy:img']);
  grunt.registerTask('default', ['build:assets']);

}