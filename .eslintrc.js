// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
  ecmaVersion: 6,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
    sourceType: 'module'
  },
  env: {
    es6: true,
    node: true,
    mocha: true,
    browser: true
  },
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  globals: {
    expect: true,
    sinon: true,
    document: false,
    navigator: false,
    window: false,
    require: true,
    FileReader: true,
    File: true
  },
  // add your custom rules here
  'rules': {
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
