module.exports = {
  images: {
    cwd: '<%= paths.src.images %>',
    src: '**/*',
    dest: '<%= paths.dist.images %>',
    expand: true
  },
  fonts: {
    cwd: '<%= paths.src.fonts %>',
    src: '**/*',
    dest: '<%= paths.dist.fonts %>',
    expand: true
  },
  templates: {
    cwd: '<%= paths.src.templates %>',
    src: '**/*',
    dest: '<%= paths.dist.templates %>',
    expand: true
  },
  mocks: {
    cwd: '<%= paths.src.mocks %>',
    src: '**/*',
    dest: '<%= paths.dist.mocks %>',
    expand: true
  }
};
