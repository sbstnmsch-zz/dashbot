module.exports = {
  all: {
    options: {
      browsers: ['last 4 versions', 'Firefox > 20', 'Chrome > 30', 'Explorer >= 10']
    },
    default: {
      expand: true,
      flatten: true
    },
    files: {
      '<%= paths.src.css %>/app.css': '<%= paths.src.css %>/stylus-out.css'
    }
  }
};
