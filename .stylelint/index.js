import bemRules from './rules/bem.js';
import generalRules from './rules/general.js';
import orderRules from './rules/order.js';
import scssRules from './rules/scss.js';
import prettierRules from './rules/prettier.js';
import pluginsRules from './rules/plugin.js';

export default {
  ...bemRules,
  ...generalRules,
  ...orderRules,
  ...prettierRules,
  ...pluginsRules,
};
