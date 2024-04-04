import React, { FC, SVGAttributes, useMemo } from 'react';
import { TIconName } from './types';
import { IconConfig } from './config';

export type IProps = SVGAttributes<SVGElement> & {
  name: TIconName;
};

const IconComponent: FC<IProps> = (props) => {
  const { name, ...svgProps } = props;
  const Component = useMemo(() => IconConfig[name], [name]);
  return <Component {...svgProps} />;
};

export default IconComponent;
