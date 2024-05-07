import React, { FC, useEffect, useState } from 'react';
import Button from '@/components/ButtonComponent/Button';
import Heading from '@/components/Heading/Heading';
import IconComponent from '@/components/IconComponent';
import Text from '@/components/Text/Text';
import { TProductDetails } from '@/modules/shared/ProductItem/products';
import clsx from 'clsx';
import '@/modules/ProdactPage/components/ProductsDetails/ProductDetails.scss';
import { setCurrentProduct, setErrorCurrentProduct, setLoadingCurrentProduct } from '@/feature/currentProduct';
import { useAppDispatch } from '@/hooks';

interface IProductDetailsProps {
  product: TProductDetails;
}

const ProductDetails: FC<IProductDetailsProps> = ({ product }) => {
  const { name, color, capacityAvailable, capacity, colorsAvailable, images, priceDiscount, priceRegular } = product;
  const [currentColor, setCurrentColor] = useState(color);
  const [currentCapacity, setCurrentCapacity] = useState(capacity);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setCurrentColor(color);
    setCurrentCapacity(capacity);
  }, [color, capacity]);

  return (
    <div className="product-details">
      <Heading tag="h2" size="2" align="left" weight="bold" className="product-details__title">
        {name}
      </Heading>
      <div className="product-details__wrapper">
        <div className="product-details__imgs">
          <div>
            <img src={`../${images[0]}`} alt="main image" className="product-details__imgs--main-img" />
          </div>
          <div className="product-details__imgs--dop">
            {images.map((img) => (
              <img key={img} src={`../${img}`} className="product-details__imgs--dop-imgs" alt="product img" />
            ))}
          </div>
        </div>
        <div className="product-details__info">
          <div className="info__wrapper">
            <Text tag="p" size="sm" align="left" weight="semi-bold" className="info__title">
              Available colors
            </Text>
            <div className="info__chose">
              {colorsAvailable.map((color) => (
                <Button
                  key={color}
                  variant="circle"
                  size="md"
                  style={{ backgroundColor: color }}
                  className={clsx({ 'button-color--active': currentColor === color })}
                ></Button>
              ))}
            </div>
          </div>

          <div className="info__line"></div>

          <div className="info__wrapper">
            <Text tag="p" size="sm" align="left" weight="semi-bold" className="info__title">
              Select capacity
            </Text>
            <div className="info__chose">
              {capacityAvailable.map((capacity) => (
                <Button
                  variant="default"
                  size="sm"
                  key={capacity}
                  className={clsx({ 'button-capacity--active': capacity === currentCapacity })}
                >
                  <Text tag="span" size="sm" align="center">
                    {capacity}
                  </Text>
                </Button>
              ))}
            </div>
          </div>

          <div className="info__line"></div>

          <div className="info__buy">
            <div className="info__price">
              {product?.priceDiscount && (
                <Heading tag="h2" size="2" weight="bold" className="inf0__price--discount">
                  {`$${priceDiscount}`}
                </Heading>
              )}
              <Heading
                tag="h2"
                size="2"
                weight="bold"
                className={clsx('info__price--regular', { 'price__regular--with-discount': priceDiscount })}
              >
                {`$${priceRegular}`}
              </Heading>
            </div>
            <div className="info__buttons">
              <Button variant="primary" size="lg" className="info__buttons--buy">
                Add to cart
              </Button>
              <Button variant="default" size="md">
                <IconComponent name="heart" width={16} height={16} />
              </Button>
            </div>
          </div>
          <div className="info__characteristic">
            <div className="info__details">
              <Text tag="p" size="sm" weight="semi-bold" align="left" className="characteristic__title">
                Screen
              </Text>
              <Text tag="p" size="sm" weight="semi-bold" align="left">
                {product?.screen}
              </Text>
            </div>

            <div className="info__details">
              <Text tag="p" size="sm" weight="semi-bold" align="left" className="characteristic__title">
                Resolution
              </Text>
              <Text tag="p" size="sm" weight="semi-bold" align="left">
                {product?.resolution}
              </Text>
            </div>

            <div className="info__details">
              <Text tag="p" size="sm" weight="semi-bold" align="left" className="characteristic__title">
                Processor
              </Text>
              <Text tag="p" size="sm" weight="semi-bold" align="left">
                {product?.processor}
              </Text>
            </div>

            <div className="info__details">
              <Text tag="p" size="sm" weight="semi-bold" align="left" className="characteristic__title">
                RAM
              </Text>
              <Text tag="p" size="sm" weight="semi-bold" align="left">
                {product?.ram}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
