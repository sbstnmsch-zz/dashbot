module.exports = {
  angular: {
    cwd: '<%= paths.src.angular %>',
    src: 'angular.min.js',
    dest: '<%= paths.dist.angular %>',
    expand: true
  },
  fonts: {
    cwd: '<%= paths.src.fonts %>',
    src: '**/*',
    dest: '<%= paths.dist.fonts %>',
    expand: true
  },
  images: {
    cwd: '<%= paths.src.images %>',
    src: '**/*',
    dest: '<%= paths.dist.images %>',
    expand: true
  },
  templates: {
    cwd: '<%= paths.src.templates %>',
    src: '**/*',
    dest: '<%= paths.dist.templates %>',
    expand: true
  },
  data: {
    cwd: '<%= paths.src.data %>',
    src: '**/*.json',
    dest: '<%= paths.dist.data %>',
    expand: true
  }
};
