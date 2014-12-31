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
        dashbotcss: 'dashbottylesheets/',
        dashbotjs: 'dashbotavascript/'
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
        dashbotjs: '/localhost:9501/'
      }
    }
  }
};
