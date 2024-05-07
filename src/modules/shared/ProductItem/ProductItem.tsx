import React, { FC } from 'react';
import { TProduct } from './products';
import Text from '@/components/Text/Text';
import Heading from '@/components/Heading/Heading';
import Button from '@/components/ButtonComponent/Button';
import IconComponent from '@/components/IconComponent';
import '@/modules/shared/ProductItem/ProductItem.scss';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

interface IProductItemProps {
  productItem: TProduct;
}

const ProductItem: FC<IProductItemProps> = ({ productItem }) => {
  const { name, screen, image, fullPrice, price, capacity, ram, category } = productItem;
  return (
    <Link to={`/${category}/${productItem.itemId}`} className="product__wrapper" state={category}>
      <div className="product__container">
        <img src={image} alt="1" className="product__img" />
      </div>
      <Text tag="p" size="base" weight="medium" className="product__name">
        {name}
      </Text>
      <div className="price">
        {price && (
          <Heading tag="h3" size="3" weight="bold" className="price__discount">
            {`$${price}`}
          </Heading>
        )}
        <Heading
          tag="h3"
          size="3"
          weight="bold"
          className={clsx('price__regular', { 'price__regular--with-discount': price })}
        >
          {`$${fullPrice}`}
        </Heading>
      </div>
      <div className="product__line"></div>
      <div className="characteristic">
        <div className="characteristic__props">
          <Text tag="p" weight="semi-bold" size="sm" className="characteristic__title">
            Screen
          </Text>
          <Text tag="p" weight="semi-bold" size="sm" transform="uppercase" className="characteristic__description">
            {screen}
          </Text>
        </div>
        <div className="characteristic__props">
          <Text tag="p" weight="semi-bold" size="sm" className="characteristic__title">
            Capacity
          </Text>
          <Text tag="p" weight="semi-bold" size="sm" transform="uppercase" className="characteristic__description">
            {capacity}
          </Text>
        </div>
        <div className="characteristic__props">
          <Text tag="p" weight="semi-bold" size="sm" className="characteristic__title">
            RAM
          </Text>
          <Text tag="p" weight="semi-bold" size="sm" transform="uppercase" className="characteristic__description">
            {ram}
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
    </Link>
  );
};

export default ProductItem;
