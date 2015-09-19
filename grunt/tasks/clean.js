module.exports = {
  before: {
    src: [
      '<%= paths.dist.root %>'
    ]
  },
  after: {
    src: ['<%= paths.src.css %>/*.css']
  }
};
