import React, { FC } from 'react';
import { TAccessories, TPhone, TTablet } from './types';
import Text from '@/components/Text/Text';
import Heading from '@/components/Heading/Heading';
import Button from '@/components/ButtonComponent/Button';
import IconComponent from '@/components/IconComponent';
import '@/modules/shared/ProductItem/ProductItem.scss';

interface IProductItemProps {
  productItem: TPhone | TTablet | TAccessories;
}

const ProductItem: FC<IProductItemProps> = ({ productItem }) => {
  return (
    <div className="product__wrapper">
      <div className="product__container">
        <img src={productItem.images[0]} alt="1" className="product__img" />
      </div>
      <Text tag="p" size="base" weight="medium" className="product__name">
        {productItem.name}
      </Text>
      <div className="price">
        <Heading tag="h3" size="3" weight="bold" className="price__regular">
          {`$${productItem.priceRegular}`}
        </Heading>
        <Heading tag="h3" size="3" weight="medium" className="price__discount">
          {`$${productItem.priceDiscount}`}
        </Heading>
      </div>
      <div className="product__line"></div>
      <div className="characteristic">
        <div className="characteristic__props">
          <Text tag="p" weight="semi-bold" size="sm" className="characteristic__title">
            Screen
          </Text>
          <Text tag="p" weight="semi-bold" size="sm" transform="uppercase" className="characteristic__description">
            {productItem.screen}
          </Text>
        </div>
        <div className="characteristic__props">
          <Text tag="p" weight="semi-bold" size="sm" className="characteristic__title">
            Capacity
          </Text>
          <Text tag="p" weight="semi-bold" size="sm" transform="uppercase" className="characteristic__description">
            {productItem.capacity}
          </Text>
        </div>
        <div className="characteristic__props">
          <Text tag="p" weight="semi-bold" size="sm" className="characteristic__title">
            RAM
          </Text>
          <Text tag="p" weight="semi-bold" size="sm" transform="uppercase" className="characteristic__description">
            {productItem.ram}
          </Text>
        </div>
      </div>
      <div className="product__button">
        <Button variant="primary" size="lg">
          Add to cart
        </Button>
        <Button variant="default" size="md">
          <IconComponent name="heart" height={16} width={16} />
        </Button>
      </div>
    </div>
  );
};

export default ProductItem;
