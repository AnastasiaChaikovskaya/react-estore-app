import styleRules from './.stylelint/index.js';

/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-standard', 'stylelint-config-recommended-scss', 'stylelint-prettier/recommended'],
  plugins: [
    'stylelint-scss',
    'stylelint-prettier',
    'stylelint-selector-bem-pattern',
    'stylelint-order',
    'stylelint-high-performance-animation',
    'stylelint-declaration-block-no-ignored-properties',
    'stylelint-selector-no-empty',
  ],
  rules: styleRules,
};
