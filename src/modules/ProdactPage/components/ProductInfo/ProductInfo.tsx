import React, { FC } from 'react';
import Heading from '@/components/Heading/Heading';
import Text from '@/components/Text/Text';
import { TProductDetails } from '@/modules/shared/ProductItem/products';
import '@/modules/ProdactPage/components/ProductInfo/ProductInfo.scss';

interface IProductInfoProps {
  product: TProductDetails;
}

const ProductInfo: FC<IProductInfoProps> = ({ product }) => {
  return (
    <div className="product-info">
      <div className="product-info__about">
        <Heading tag="h3" size="3" align="left" weight="bold" className="product-info__title">
          About
        </Heading>
        {product?.description.map((item, index) => (
          <div className="product-info__description" key={index}>
            <Heading tag="h4" size="4" align="left" weight="semi-bold">
              {item.title}
            </Heading>
            <Text tag="p" size="base" align="left" weight="medium" className="product-info__text">
              {item.text}
            </Text>
          </div>
        ))}
      </div>

      <div className="product-info__tech">
        <Heading tag="h3" size="3" align="left" weight="bold" className="product-info__title">
          Tech specs
        </Heading>
        <div className="product-info__characteristic">
          <div className="product-info__specs">
            <Text tag="p" size="base" align="left" weight="medium" className="product-info__specs__title">
              Screen
            </Text>
            <Text tag="p" size="base" align="left" weight="medium">
              {product?.screen}
            </Text>
          </div>

          <div className="product-info__specs">
            <Text tag="p" size="base" align="left" weight="medium" className="product-info__specs__title">
              Resolution
            </Text>
            <Text tag="p" size="base" align="left" weight="medium">
              {product?.resolution}
            </Text>
          </div>

          <div className="product-info__specs">
            <Text tag="p" size="base" align="left" weight="medium" className="product-info__specs__title">
              Processor
            </Text>
            <Text tag="p" size="base" align="left" weight="medium">
              {product?.processor}
            </Text>
          </div>

          <div className="product-info__specs">
            <Text tag="p" size="base" align="left" weight="medium" className="product-info__specs__title">
              RAM
            </Text>
            <Text tag="p" size="base" align="left" weight="medium">
              {product?.ram}
            </Text>
          </div>

          <div className="product-info__specs">
            <Text tag="p" size="base" align="left" weight="medium" className="product-info__specs__title">
              Built in memory
            </Text>
            <Text tag="p" size="base" align="left" weight="medium">
              {product?.capacity}
            </Text>
          </div>

          <div className="product-info__specs">
            <Text tag="p" size="base" align="left" weight="medium" className="product-info__specs__title">
              Camera
            </Text>
            <Text tag="p" size="base" align="left" weight="medium">
              {product?.camera}
            </Text>
          </div>

          <div className="product-info__specs">
            <Text tag="p" size="base" align="left" weight="medium" className="product-info__specs__title">
              Zoom
            </Text>
            <Text tag="p" size="base" align="left" weight="medium">
              {product?.zoom}
            </Text>
          </div>

          <div className="product-info__specs">
            <Text tag="p" size="base" align="left" weight="medium" className="product-info__specs__title">
              Cell
            </Text>
            <Text tag="p" size="base" align="left" weight="medium">
              {product?.cell}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
