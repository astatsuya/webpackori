module.exports = {
  // "extends": "airbnb"
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended"
  ],
  parser: "babel-eslint",
  globals: {
    module: true,
    document: true,
    require: true,
    __dirname: true
  },
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": ["error", { singleQuote: true }]
  }
};
