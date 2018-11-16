const path = require('path');

module.exports = {
  entry: './example/src',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'example.bundle.js'
  }
};
