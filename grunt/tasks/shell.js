module.exports = {
  webpack: {
    command: 'npm run-script build'
  },
  webpackDev: {
    command: 'npm run-script serve'
  },
  shrinkwrap: {
    command: [
      'npm prune',
      'rm -rf node_modules/webpack-dev-server',
      'npm install webpack-dev-server --quiet',
      'npm shrinkwrap --dev'
    ].join('&&')
  }
};
