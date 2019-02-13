module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-prettier/recommended'],
  plugins: ['stylelint-scss', 'stylelint-prettier'],
  rules: {
    'at-rule-no-unknown': null,
    'prettier/prettier': true
  }
};
