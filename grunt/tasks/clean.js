module.exports = {
  before: {
    src: [
      '<%= paths.dist.root %>'
    ]
  },
  after: {
    options: {
      force: true
    },
    src: ['<%= paths.src.css %>/*.css']
  }
};
