var path = require('path');
var _format = require('prettier-eslint');

function format (options) {
  return _format(
    Object.assign({}, options, {
      eslintPath: path.dirname(require.resolve('semistandard-prettier-eslint'))
    })
  );
}

module.exports = format;
