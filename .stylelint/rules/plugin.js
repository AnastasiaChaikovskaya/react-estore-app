export default {
  /**
   * Stylelint rule for preventing the use of low performance animation and transition properties.
   * @see https://github.com/kristerkari/stylelint-high-performance-animation
   */
  'plugin/no-low-performance-animation-properties': true,
  /**
   * Disallow property values that are ignored due to another property value in the same rule.
   * @see https://github.com/kristerkari/stylelint-declaration-block-no-ignored-properties
   */
  'plugin/declaration-block-no-ignored-properties': true,
};
