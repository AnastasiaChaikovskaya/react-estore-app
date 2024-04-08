import clsx from 'clsx';
import React, { FC, createElement } from 'react';
import '@/components/Heading/Heading.scss';

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  tag?: 'h1' | 'h2' | 'h3' | 'h4';
  align?: 'center' | 'left' | 'right';
  transform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
  weight?: 'bold' | 'thin' | 'extra-light' | 'light' | 'regular' | 'semi-bold' | 'black' | 'medium';
  size?: '1' | '2' | '3' | '4';
  className?: string;
  children?: React.ReactNode;
}

const Heading: FC<HeadingProps> = (props) => {
  const { tag = 'h1', align = 'center', transform, weight, size = '1', className, children, ...restProps } = props;

  return createElement(
    tag,
    {
      ...restProps,
      className: clsx(
        'heading',
        `heading--size-${size}`,
        `heading--weight-${weight}`,
        `heading--align-${align}`,
        `heading--transform-${transform}`,
        className,
      ),
    },
    children,
  );
};

export default Heading;
