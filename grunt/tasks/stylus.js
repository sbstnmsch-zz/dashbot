/* globals module */
module.exports = {
  all: {
    options: {
      compress: false,
      linenos: false,
      urlfunc: 'embedurl' // use embedurl('test.png') in our code to trigger
                          // Data URI embedding
    },
    files: {
      '<%= paths.src.css %>/stylus-out.css': [
        '<%= paths.src.css %>/**/*.styl'
      ]
    }
  }
};
