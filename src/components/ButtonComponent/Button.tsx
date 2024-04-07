import React, { FC } from 'react';
import { BUTTON_SIZE, BUTTON_VARIANTS } from '@/components/ButtonComponent/types';
import './Button.scss';
import { clsx } from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: BUTTON_VARIANTS;
  size?: BUTTON_SIZE;
  iconLeft?: React.ReactElement;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    variant = BUTTON_VARIANTS.DefaultButton,
    size = BUTTON_SIZE.Medium,
    iconLeft,
    className,
    children,
    ...restProps
  } = props;

  return (
    <button className={clsx('btn', `btn--${variant}`, `btn--${size}`, className)} {...restProps}>
      {iconLeft && (
        <span className="btn__icon">
          {React.cloneElement(iconLeft, {
            width: 16,
            height: 16,
            className: clsx(iconLeft.props.className),
          })}
        </span>
      )}
      {children}
    </button>
  );
};

export default Button;
