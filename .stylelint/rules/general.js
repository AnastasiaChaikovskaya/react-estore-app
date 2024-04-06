export default {
  /**
   * Disallow empty blocks.
   * @link https://stylelint.io/user-guide/rules/block-no-empty/
   */
  'block-no-empty': true,
  /**
   * Disallow empty comments.
   * @link https://stylelint.io/user-guide/rules/comment-no-empty/
   */
  'comment-no-empty': true,
  /**
   * Disallow duplicate custom properties within declaration blocks.
   * @link https://stylelint.io/user-guide/rules/declaration-block-no-duplicate-custom-properties/
   */
  'declaration-block-no-duplicate-custom-properties': true,
  /**
   * Disallow shorthand properties that override related longhand properties.
   * @link https://stylelint.io/user-guide/rules/declaration-block-no-shorthand-property-overrides/
   */
  'declaration-block-no-shorthand-property-overrides': true,
  /**
   * Disallow duplicate names within font families.
   * @link https://stylelint.io/user-guide/rules/font-family-no-duplicate-names/
   */
  'font-family-no-duplicate-names': true,
  /**
   * Disallow non-standard direction values for linear gradient functions.
   * @link https://stylelint.io/user-guide/rules/function-linear-gradient-no-nonstandard-direction/
   */
  'function-linear-gradient-no-nonstandard-direction': null,
  /**
   * Disallow unknown media feature names.
   * @link https://stylelint.io/user-guide/rules/media-feature-name-no-unknown/
   */
  'media-feature-name-no-unknown': true,
  /**
   * Disallow invalid named grid areas.
   * @link https://stylelint.io/user-guide/rules/named-grid-areas-no-invalid/
   */
  'named-grid-areas-no-invalid': true,
  /**
   * Disallow empty sources.
   * @link https://stylelint.io/user-guide/rules/no-empty-source/
   */
  'no-empty-source': true,
  /**
   * Disallow invalid double-slash comments.
   * @link https://stylelint.io/user-guide/rules/no-invalid-double-slash-comments/
   */
  'no-invalid-double-slash-comments': true,
  /**
   * Disallow irregular whitespaces.
   * @link https://stylelint.io/user-guide/rules/no-irregular-whitespace/
   */
  'no-irregular-whitespace': true,
  /**
   * Disallow unknown properties.
   * @link https://stylelint.io/user-guide/rules/property-no-unknown/
   */
  'property-no-unknown': true,
  /**
   * Disallow unknown pseudo-class selectors.
   * @link https://stylelint.io/user-guide/rules/selector-pseudo-class-no-unknown/
   */
  'selector-pseudo-class-no-unknown': true,
  /**
   * Disallow unknown pseudo-element selectors.
   * @link https://stylelint.io/user-guide/rules/selector-pseudo-element-no-unknown/
   */
  'selector-pseudo-element-no-unknown': true,
  /**
   * Disallow unknown type selectors.
   * @link https://stylelint.io/user-guide/rules/string-no-newline/
   */
  'string-no-newline': true,
  /**
   * Disallow unknown units.
   * @link https://stylelint.io/user-guide/rules/unit-no-unknown/
   */
  'unit-no-unknown': true,
  /**
   * Disallow unknown annotations.
   * @link https://stylelint.io/user-guide/rules/annotation-no-unknown/
   */
  'annotation-no-unknown': true,
  /**
   * Disallow invalid hex colors.
   * @link https://stylelint.io/user-guide/rules/color-no-invalid-hex/
   */
  'color-no-invalid-hex': true,
  /**
   * Disallow a missing generic family keyword within font families.
   * @link https://stylelint.io/user-guide/rules/font-family-no-missing-generic-family-keyword/
   */
  'font-family-no-missing-generic-family-keyword': true,
  /**
   * Disallow invalid unspaced operator within calc functions.
   * @link https://stylelint.io/user-guide/rules/function-calc-no-unspaced-operator/
   */
  'function-calc-no-unspaced-operator': true,
  /**
   * Disallow unknown functions.
   * @link https://stylelint.io/user-guide/rules/function-no-unknown/
   */
  'function-no-unknown': true,
  /**
   * Disallow missing var function for custom properties.
   * @link https://stylelint.io/user-guide/rules/custom-property-no-missing-var-function/
   */
  'custom-property-no-missing-var-function': true,
  /**
   * Disallow invalid !important within keyframe declarations.
   * @link https://stylelint.io/user-guide/rules/keyframe-declaration-no-important/
   */
  'keyframe-declaration-no-important': true,
  /**
   * Disallow duplicate selectors within keyframe blocks.
   * @link https://stylelint.io/user-guide/rules/keyframe-block-no-duplicate-selectors/
   */
  'keyframe-block-no-duplicate-selectors': true,
  /**
   * Disallow duplicate properties within declaration blocks.
   * @link https://stylelint.io/user-guide/rules/declaration-block-no-duplicate-properties/
   */
  'declaration-block-no-duplicate-properties': true,
  /**
   * Disallow unknown type selectors.
   * @link https://stylelint.io/user-guide/rules/selector-type-no-unknown/
   */
  'selector-type-no-unknown': true,
  /**
   * Disallow unknown at-rules.
   * @link https://stylelint.io/user-guide/rules/at-rule-no-unknown/
   */
  'at-rule-no-unknown': [
    true,
    {
      ignoreAtRules: ['mixin', 'define-mixin', 'include', 'content', 'rules', 'each'],
    },
  ],
  /**
   * Disallow selectors of lower specificity from coming after overriding
   * selectors of higher specificity.
   * @link https://stylelint.io/user-guide/rules/no-descending-specificity/
   */
  'no-descending-specificity': null,
  /**
   * Disallow duplicate @import rules within a stylesheet.
   * @link https://stylelint.io/user-guide/rules/no-duplicate-at-import-rules/
   */
  'no-duplicate-at-import-rules': true,
  /**
   * Disallow invalid position @import rules.
   * @link https://stylelint.io/user-guide/rules/no-invalid-position-at-import-rule/
   */
  'no-invalid-position-at-import-rule': true,
  /**
   * Require or disallow alpha channel for hex colors.
   * @link https://stylelint.io/user-guide/rules/color-hex-alpha/
   */
  'color-hex-alpha': 'never',
  /**
   * Specify short or long notation for hex colors.
   * @link https://stylelint.io/user-guide/rules/color-hex-length/
   */
  'color-hex-length': 'long',
  /**
   * Require (where possible) or disallow named colors.
   * @link https://stylelint.io/user-guide/rules/color-named/
   */
  'color-named': 'never',
  /**
   * Disallow hex colors.
   * @link https://stylelint.io/user-guide/rules/color-no-hex/
   */
  'color-no-hex': null,
  /**
   * Specify modern or legacy notation for color-functions.
   * @link https://stylelint.io/user-guide/rules/color-function-notation/
   */
  'color-function-notation': ['modern', { ignore: ['with-var-inside'] }],
  /**
   * Disallow units for zero lengths.
   * @link https://stylelint.io/user-guide/rules/length-zero-no-unit/
   */
  'length-zero-no-unit': [
    true,
    {
      ignore: ['custom-properties'],
      ignoreFunctions: ['/^--/'],
    },
  ],
  /**
   * Require or disallow quotes for font family names.
   * @link https://stylelint.io/user-guide/rules/font-family-name-quotes/
   */
  'font-family-name-quotes': 'always-unless-keyword',
  /**
   * Require numeric or named (where possible) font-weight values.
   * @link https://stylelint.io/user-guide/rules/font-weight-notation/
   */
  'font-weight-notation': [
    'numeric',
    {
      ignore: ['relative'],
    },
  ],
  /**
   * Require or disallow quotes for urls.
   * @link https://stylelint.io/user-guide/rules/function-url-quotes/
   */
  'function-url-quotes': 'always',
  /**
   * Specify string or URL notation for @import rules.
   * @link https://stylelint.io/user-guide/rules/import-notation/
   */
  'import-notation': null,
  /**
   * Specify keyword or percentage notation for keyframe selectors.
   * @link https://stylelint.io/user-guide/rules/keyframe-selector-notation/
   */
  'keyframe-selector-notation': 'percentage-unless-within-keyword-only-block',
  /**
   * Limit the number of decimal places allowed in numbers.
   * @link https://stylelint.io/user-guide/rules/number-max-precision/
   */
  'number-max-precision': 2,
  /**
   * Disallow vendor prefixes for values.
   * @link https://stylelint.io/user-guide/rules/value-no-vendor-prefix/
   */
  'value-no-vendor-prefix': true,
  /**
   * Specify a list of allowed properties.
   * @link https://stylelint.io/user-guide/rules/property-allowed-list/
   */
  'property-allowed-list': null,
  /**
   * Specify a list of disallowed properties.
   * @link https://stylelint.io/user-guide/rules/property-disallowed-list/
   */
  'property-disallowed-list': null,
  /**
   * Disallow vendor prefixes for properties.
   * @link https://stylelint.io/user-guide/rules/property-no-vendor-prefix/
   */
  'property-no-vendor-prefix': true,
  /**
   * Disallow !important within declarations.
   * @link https://stylelint.io/user-guide/rules/declaration-no-important/
   */
  'declaration-no-important': true,
  /**
   * Limit the number of values for a list of properties within declarations.
   * @link https://stylelint.io/user-guide/rules/declaration-property-max-values/
   */
  'declaration-property-max-values': null,
  /**
   * Disallow unknown values for properties within declarations.
   * @link https://stylelint.io/user-guide/rules/declaration-property-value-no-unknown/
   */
  'declaration-property-value-no-unknown': true,
  /**
   * Require or disallow quotes for attribute values.
   * @link https://stylelint.io/user-guide/rules/selector-attribute-quotes/
   */
  'selector-attribute-quotes': 'always',
  /**
   * Limit the number of ID selectors in a selector.
   * @link https://stylelint.io/user-guide/rules/selector-max-id/
   */
  'selector-max-id': 0,
  /**
   * Limit the number of universal selectors in a selector.
   * @link https://stylelint.io/user-guide/rules/selector-max-universal/
   */
  'selector-max-universal': 2,
  /**
   * Specify simple or complex notation for :not() pseudo-class selectors.
   * @link https://stylelint.io/user-guide/rules/selector-not-notation/
   */
  'selector-not-notation': 'complex',
  /**
   * Specify single or double colon notation for applicable pseudo-element selectors.
   * @link https://stylelint.io/user-guide/rules/selector-pseudo-element-colon-notation/
   */
  'selector-pseudo-element-colon-notation': 'double',
  /**
   * Specify a list of disallowed properties for selectors within rules.
   * @link https://stylelint.io/user-guide/rules/rule-selector-property-disallowed-list/
   */
  'rule-selector-property-disallowed-list': null,
  /**
   * Disallow vendor prefixes for media feature names.
   * @link https://stylelint.io/user-guide/rules/media-feature-name-no-vendor-prefix/
   */
  'media-feature-name-no-vendor-prefix': true,
  /**
   * Disallow vendor prefixes for at-rules.
   * @link https://stylelint.io/user-guide/rules/at-rule-no-vendor-prefix/
   */
  'at-rule-no-vendor-prefix': true,
  /**
   * Limit the depth of nesting.
   * @link https://stylelint.io/user-guide/rules/max-nesting-depth/
   */
  'max-nesting-depth': [2, { ignoreAtRules: ['media'] }],
  /**
   * Specify lowercase or uppercase for keywords values.
   * @link https://stylelint.io/user-guide/rules/value-keyword-case/
   */
  'value-keyword-case': ['lower', { camelCaseSvgKeywords: true }],
  /**
   * Specify lowercase or uppercase for function names.
   * @link https://stylelint.io/user-guide/rules/function-name-case/
   */
  'function-name-case': 'lower',
  /**
   * Specify lowercase or uppercase for type selectors.
   * @link https://stylelint.io/user-guide/rules/selector-type-case/
   */
  'selector-type-case': 'lower',
  /**
   * Require or disallow an empty line before rules.
   * @link https://stylelint.io/user-guide/rules/rule-empty-line-before/
   */
  'rule-empty-line-before': [
    'always',
    {
      except: ['first-nested'],
      ignore: ['after-comment'],
    },
  ],
  /**
   * Require or disallow an empty line before at-rules.
   * @link https://stylelint.io/user-guide/rules/at-rule-empty-line-before/
   */
  'at-rule-empty-line-before': [
    'always',
    {
      except: ['first-nested', 'blockless-after-blockless'],
      ignore: ['after-comment'],
      ignoreAtRules: ['else'],
    },
  ],
};
