module.exports = {
  default: {
    files: {
      '<%= paths.dist.root %>/index.html': [
        '<%= paths.src.templates %>/index.html'
      ]
    },
    options: {
      process: true,
      data: {
      }
    }
  }
};
