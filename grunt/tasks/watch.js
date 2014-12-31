module.exports = {
  images: {
    files: '<%= paths.src.images %>/**/*',
    tasks: ['static']
  },
  templates: {
    files: '<%= paths.src.templates %>/**/*',
    tasks: ['static']
  },
  styles: {
    files: '<%= paths.src.css %>/styl/*',
    tasks: ['static']
  },
  test: {
    files: [
      '<%= paths.src.js %>/**/*.js',
      '<%= paths.src.templates %>/**/*.html',
      '<%= paths.test.mocha %>'
    ],
    tasks: ['static']
  },
  local: {
    files: [
      '<%= paths.src.js %>/**/*.js',
      '<%= paths.src.templates %>/**/*.html'
    ],
    tasks: ['static']
  }
};
