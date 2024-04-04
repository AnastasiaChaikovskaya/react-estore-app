import HeaderMenu from '@/assets/icons/icon-menu.svg?react';
import ArrowLeft from '@/assets/icons/chevron-arrow-left.svg?react';
import ArrowRight from '@/assets/icons/chevron-arrow-right.svg?react';
import ArrowDown from '@/assets/icons/chevron-arrow-down.svg?react';
import ArrowUp from '@/assets/icons/chevron-arrow-up.svg?react';
import HomeIcon from '@/assets/icons/home.svg?react';
import SearchIcon from '@/assets/icons/search.svg?react';
import HeartIcon from '@/assets/icons/header-fav.svg?react';
import HeartFilledIcon from '@/assets/icons/favourites-filled.svg?react';
import CartIcon from '@/assets/icons/header-cart.svg?react';
import PlusIcon from '@/assets/icons/plus.svg?react';
import MinusIcon from '@/assets/icons/minus.svg?react';
import CloseIcon from '@/assets/icons/close.svg?react';

import type { TIconConfig } from './types';

export const IconConfig: TIconConfig = {
  home: HomeIcon,
  search: SearchIcon,
  'shop-cart': CartIcon,
  heart: HeartIcon,
  'heart-filled': HeartFilledIcon,
  'minus-icon': MinusIcon,
  'plus-icon': PlusIcon,
  'close-icon': CloseIcon,
  'arrow-left': ArrowLeft,
  'arrow-right': ArrowRight,
  'arrow-down': ArrowDown,
  'arrow-up': ArrowUp,
  'menu-icon': HeaderMenu,
};
