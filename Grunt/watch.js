module.exports = {
  styles: {
    files: ['<%= srcPath %>/**/*.scss'],
    tasks: ['build:assets'],
    options: {
      livereload: false
    }
  }
};