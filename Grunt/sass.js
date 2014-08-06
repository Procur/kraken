module.exports = {
  dist: {
    options: {
      style: 'expanded'
    },
    files: {
      '<%= distPath %>/kraken.css': '<%= srcPath %>/kraken.scss'
    }
  },
  distMin: {
    options: {
      style: 'compressed'
    },
    files: {
      '<%= distPath %>/kraken.min.css': '<%= srcPath %>/kraken.scss'
    }
  }
};