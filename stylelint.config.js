export default {
  extends: ['stylelint-config-standard', 'stylelint-config-recommended-scss'],
  plugins: ['stylelint-scss'],
  rules: {
    'max-nesting-depth': 3,
    'no-duplicate-at-import-rules': true,
    "scss/no-global-function-names": null,
    "no-empty-source": null,
    'scss/load-no-partial-leading-underscore': null,
    'import-notation': null,
  },
  ignoreFiles: ['**/node_modules/**', '**/dist/**'],
};