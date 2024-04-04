export type TIconName =
  | 'home'
  | 'search'
  | 'shop-cart'
  | 'heart'
  | 'heart-filled'
  | 'minus-icon'
  | 'plus-icon'
  | 'close-icon'
  | 'arrow-left'
  | 'arrow-right'
  | 'arrow-down'
  | 'arrow-up'
  | 'menu-icon';

export type TIconElement = React.FunctionComponent<React.SVGAttributes<SVGElement>>;
export type TIconConfig = Record<TIconName, TIconElement>;
