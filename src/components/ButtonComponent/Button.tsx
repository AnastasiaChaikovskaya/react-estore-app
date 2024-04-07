import React, { FC } from 'react';
import './Button.scss';
import { clsx } from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'circle' | 'primary' | 'link';
  size?: 'sm' | 'md' | 'lg';
  iconLeft?: React.ReactElement;
}

export const Button: FC<ButtonProps> = (props) => {
  const { variant = 'default', size = 'md', iconLeft, className, children, ...restProps } = props;

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
