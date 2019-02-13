module.exports = {
  extends: [
    // 'airbnb',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'prettier/react'
  ],
  parser: 'babel-eslint',
  globals: {
    module: true,
    document: true,
    require: true,
    __dirname: true
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error']
  }
};
