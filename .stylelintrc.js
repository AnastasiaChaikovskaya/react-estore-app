import styleRules from './.stylelint/index.js';
import scssRules from './.stylelint/rules/scss.js';
/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-standard', 'stylelint-config-recommended-scss', 'stylelint-prettier/recommended'],
  plugins: [
    'stylelint-prettier',
    'stylelint-selector-bem-pattern',
    'stylelint-order',
    'stylelint-high-performance-animation',
    'stylelint-declaration-block-no-ignored-properties',
  ],
  rules: styleRules,
  overrides: [
    {
      files: ['**/*.scss'],
      plugins: ['stylelint-scss'],
      ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts', '**/*.json'],
      rules: scssRules,
    },
  ],
};
