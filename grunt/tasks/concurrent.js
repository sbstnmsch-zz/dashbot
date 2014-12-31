module.exports = {
  serve: {
    tasks: [
      'shell:webpackDev',
      'watch'
    ],
    options: {
      logConcurrentOutput: true
    }
  }
};
