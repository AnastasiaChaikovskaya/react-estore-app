export default {
  /**
   * Define a custom pattern by passing an object with the following properties
   * @see https://github.com/postcss/postcss-bem-linter#readme
   * @link https://www.npmjs.com/package/stylelint-selector-bem-pattern
   */
  'plugin/selector-bem-pattern': {
    preset: 'bem',
    componentName: '[A-Z]+',
    componentSelectors: {
      initial: '^\\.{componentName}(?:-[a-z]+)?$',
      combined: '^\\.combined-{componentName}-[a-z]+$',
    },
    utilitySelectors: '^\\.util-[a-z]+$',
  },
};
