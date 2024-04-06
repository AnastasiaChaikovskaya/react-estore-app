import propertiesOrder from '../helpers/properties-order.js';

export default {
  /**
   * Specify the order of content within declaration blocks.
   * @link https://github.com/hudochenkov/stylelint-order/tree/master/rules/order
   */
  'order/order': [
    [
      'dollar-variables',
      'custom-properties',
      'at-rules',
      'declarations',
      {
        type: 'at-rule',
        name: 'supports',
      },
      {
        type: 'at-rule',
        name: 'media',
      },
      'rules',
      {
        type: 'at-rule',
        name: 'include',
        parameter: /xs|sm|md|lg|xl|xxl/,
        hasBlock: true,
      },
    ],
    { severity: 'warning' },
  ],
  /**
   * Specify the order of properties within declaration blocks.
   * @link https://github.com/hudochenkov/stylelint-order/tree/master/rules/properties-order
   */
  'order/properties-order': propertiesOrder,
};
