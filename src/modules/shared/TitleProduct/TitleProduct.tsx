import React, { FC } from 'react';
import Heading from '@/components/Heading/Heading';
import Text from '@/components/Text/Text';
import '@/modules/shared/TitleProduct/TileProduct.scss';

interface ITitleProduct {
  title: string;
  quantity: number;
}

const TitleProduct: FC<ITitleProduct> = ({ title, quantity }) => {
  return (
    <div className="info">
      <Heading tag="h1" size="1" weight="bold" align="left" className="info__title">
        {title}
      </Heading>

      <Text tag="p" size="base" align="left" weight="medium" className="info__description">{`${quantity} models`}</Text>
    </div>
  );
};

export default TitleProduct;
