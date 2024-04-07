import React, { FC } from 'react';
import { BUTTON_SIZE, BUTTON_VARIANTS } from '@/components/ButtonComponent/types';
import './Button.scss';
import { clsx } from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: BUTTON_VARIANTS;
  size?: BUTTON_SIZE;
}

export const Button: FC<ButtonProps> = (props) => {
  const { variant = BUTTON_VARIANTS.Primary, size = BUTTON_SIZE.Medium, className, children, ...restProps } = props;

  return <button className={clsx('btn', `btn--${variant}`, `btn--${size}`, className)}>{children}</button>;
};

export default Button;
