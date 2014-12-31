module.exports = {
  all: {
    files: {
      '<%= paths.dist.css %>/dashbot.min.css': [
        '<%= paths.src.css %>/**/*.css'
      ]
    }
  }
};
