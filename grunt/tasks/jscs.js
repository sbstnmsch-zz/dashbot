/* globals module */
module.exports = {
  files: '<%= paths.lint %>',
  options: {
    preset: 'airbnb',
    esnext: true,
    requireTrailingComma: null,
    disallowMultipleVarDecl: null,
    requireSpacesInAnonymousFunctionExpression: null,
    requireSpacesInsideObjectBrackets: null
  }
};
