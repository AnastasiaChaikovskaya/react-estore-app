import clsx from 'clsx';

export const getIsActiveClass = ({ isActive }: { isActive: boolean }) => {
  return clsx('nav__link', { 'is-active-page': isActive });
};
