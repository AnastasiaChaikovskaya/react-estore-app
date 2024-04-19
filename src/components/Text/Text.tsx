import clsx from 'clsx';
import React, { FC, createElement } from 'react';
import '@/components/Text/Text.scss';

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  tag?: 'p' | 'span';
  size?: 'base' | 'sm';
  align?: 'center' | 'left' | 'right';
  transform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
  weight?: 'bold' | 'thin' | 'extra-light' | 'light' | 'regular' | 'semi-bold' | 'black' | 'medium';
  className?: string;
  children?: React.ReactNode;
}

const Text: FC<TextProps> = (props) => {
  const { tag = 'p', size = 'base', align, transform, weight, children, className, ...restProps } = props;
  return createElement(
    tag,
    {
      ...restProps,
      className: clsx(
        'text',
        `text--size-${size}`,
        `text--align-${align}`,
        `text--weight-${weight}`,
        `text--transform-${transform}`,
        className,
      ),
    },
    children,
  );
};

export default Text;
