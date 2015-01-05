module.exports = {
  dist: {
    files: {
      '<%= paths.dist.templates %>/index.html': [
        '<%= paths.src.templates %>/index.html'
      ]
    },
    options: {
      process: true,
      data: {
        environment: 'dist',
        dashbotcss: 'dist/stylesheets/',
        dashbotjs: 'dist/javascript/'
      }
    }
  },
  local: {
    files: {
      'index.html': [
        '<%= paths.src.templates %>/index.html'
      ]
    },
    options: {
      process: true,
      data: {
        environment: 'local',
        dashbotcss: 'dist/stylesheets/',
        dashbotjs: 'dist/javascript/'
      }
    }
  }
};
