module.exports = {
  all: {
    src: [
      '<%= paths.dist.css %>',
      '<%= paths.dist.images %>',
      '<%= paths.dist.templates %>',
      '<%= paths.dist.mocks %>'
    ]
  },
  dust: {
    src: ['<%= paths.src.css %>/*.css']
  }
};
