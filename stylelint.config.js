export default {
  extends: ['stylelint-config-standard', 'stylelint-config-recommended-scss'],
  plugins: ['stylelint-scss'],
  rules: {
    indentation: 2,
    'color-hex-case': 'lower',
    'max-nesting-depth': 3,
    'no-duplicate-at-import-rules': true,
  },
  ignoreFiles: ['**/node_modules/**', '**/dist/**'],
};