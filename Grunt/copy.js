module.exports = {
  fonts: {
    expand: true,
    src: './src/static/fonts/*',
    dest: './dist/fonts/',
    flatten: true,
    filter: 'isFile'
  },
  img: {
    expand: true,
    src: './src/static/img/*',
    dest: './dist/img/',
    flatten: true,
    filter: 'isFile'
  }
};