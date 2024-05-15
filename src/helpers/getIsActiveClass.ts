import clsx from 'clsx';

export const getIsActiveClass = ({ isActive }: { isActive: boolean }) => {
  return clsx('nav__link', { 'is-active-page': isActive });
};

export const getActiveClassForMobileMenu = ({ isActive }: { isActive: boolean }) => {
  return clsx('menu-mobile__link', { 'is-active-mob-page': isActive });
};

export const getActiveClassForMobileCart = ({ isActive }: { isActive: boolean }) => {
  return clsx('menu-mobile__nav', { 'is-active-mob-page': isActive });
};
