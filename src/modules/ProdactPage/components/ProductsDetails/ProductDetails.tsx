import React, { FC, useEffect, useState } from 'react';
import Button from '@/components/ButtonComponent/Button';
import Heading from '@/components/Heading/Heading';
import IconComponent from '@/components/IconComponent';
import Text from '@/components/Text/Text';
import { TProduct, TProductDetails } from '@/modules/shared/ProductItem/products';
import clsx from 'clsx';
import '@/modules/ProdactPage/components/ProductsDetails/ProductDetails.scss';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { addToCart, removeFromCart } from '@/feature/cartReducer';
import { addFavorite, removeFavorite } from '@/feature/favouritesReducer';
import { getProductById } from '@/helpers/getProductById';

interface IProductDetailsProps {
  currentProduct: TProductDetails;
}

const ProductDetails: FC<IProductDetailsProps> = ({ currentProduct }) => {
  const {
    name,
    color,
    capacityAvailable,
    capacity,
    colorsAvailable,
    images,
    priceDiscount,
    priceRegular,
    screen,
    ram,
    resolution,
    processor,
    namespaceId,
    category,
    id,
  } = currentProduct;
  const navigate = useNavigate();
  const [mainImage, setMainImage] = useState(images[0]);
  const [isLoadingAddToCart, setIsLoadingAddToCart] = useState(false);
  const [isErrorAddToCart, setIsErrorAddToCart] = useState(false);
  const [isLoadingAddToFavorites, setIsLoadingAddToFavorites] = useState(false);
  const [isErrorAddToFavorites, setIsErrorAddToFavorites] = useState(false);
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart.cartProducts);
  const favorites = useAppSelector((state) => state.favorites.favorites);
  const isProductInCart = cart.find((item) => item.itemId === id);
  const isProductInFavorite = favorites.find((item) => item.itemId === id);

  const handleChooseProduct = (color: string, nameSpaceId: string, capacity: string) => {
    console.log(color, nameSpaceId, capacity);

    const newProductId = `${nameSpaceId}-${capacity.toLowerCase()}-${color.toLowerCase()}`;
    navigate(`/${category}/${newProductId}`);
  };

  const handleAddToCart = async (productId: string) => {
    if (isProductInCart) {
      dispatch(removeFromCart(productId));
      return;
    }

    try {
      setIsLoadingAddToCart(true);
      setIsErrorAddToCart(false);
      const product = await getProductById(productId);

      if (product) {
        dispatch(addToCart(product));
      }
    } catch (error) {
      setIsErrorAddToCart(true);
    } finally {
      setIsLoadingAddToCart(false);
    }
  };

  const handleAddToFavorite = async (productId: string) => {
    if (isProductInFavorite) {
      dispatch(removeFavorite(productId));
      return;
    }

    try {
      setIsLoadingAddToFavorites(true);
      setIsErrorAddToFavorites(false);
      const product = await getProductById(productId);

      if (product) {
        dispatch(addFavorite(product));
      }
    } catch (error) {
      setIsErrorAddToFavorites(true);
    } finally {
      setIsLoadingAddToFavorites(false);
    }
  };

  const handleSelectImage = (img: string) => {
    setMainImage(img);
  };

  useEffect(() => {
    setMainImage(images[0]);
  }, [images]);

  return (
    <div className="product-details">
      <Heading tag="h2" size="2" align="left" weight="bold" className="product-details__title">
        {name}
      </Heading>
      <div className="product-details__wrapper">
        <div className="product-details__imgs">
          <div>
            <img src={`/${mainImage}`} alt="main image" className="product-details__imgs--main-img" />
          </div>
          <div className="product-details__imgs--dop">
            {images.map((img) => (
              <img
                key={img}
                src={`/${img}`}
                className="product-details__imgs--dop-imgs"
                alt="product img"
                onClick={() => handleSelectImage(img)}
              />
            ))}
          </div>
        </div>
        <div className="product-details__info">
          <div className="info__wrapper">
            <Text tag="p" size="sm" align="left" weight="semi-bold" className="info__title">
              Available colors
            </Text>
            <div className="info__chose">
              {colorsAvailable.map((currentColor) => (
                <Button
                  key={currentColor}
                  variant="circle"
                  size="md"
                  style={{ backgroundColor: currentColor }}
                  onClick={() => handleChooseProduct(currentColor, namespaceId, capacity)}
                  className={clsx({ 'button-color--active': currentColor === color })}
                />
              ))}
            </div>
          </div>

          <div className="info__line"></div>

          <div className="info__wrapper">
            <Text tag="p" size="sm" align="left" weight="semi-bold" className="info__title">
              Select capacity
            </Text>
            <div className="info__chose">
              {capacityAvailable.map((currentCapacity) => (
                <Button
                  variant="default"
                  size="sm"
                  key={currentCapacity}
                  className={clsx({ 'button-capacity--active': currentCapacity === capacity })}
                  onClick={() => handleChooseProduct(color, namespaceId, currentCapacity)}
                >
                  <Text tag="span" size="sm" align="center">
                    {currentCapacity}
                  </Text>
                </Button>
              ))}
            </div>
          </div>

          <div className="info__line"></div>

          <div className="info__buy">
            <div className="info__price">
              {priceDiscount && (
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
              <Button
                variant="primary"
                size="lg"
                className={clsx('info__buttons--buy', { 'button-cart--active': isProductInCart })}
                onClick={() => handleAddToCart(currentProduct.id)}
              >
                Add to cart
              </Button>
              <Button variant="default" size="md" onClick={() => handleAddToFavorite(currentProduct.id)}>
                <IconComponent
                  width={16}
                  height={16}
                  name={isProductInFavorite ? 'heart-filled' : 'heart'}
                  color={isProductInFavorite && '#eb5757'}
                />
              </Button>
            </div>
          </div>
          <div className="info__characteristic">
            <div className="info__details">
              <Text tag="p" size="sm" weight="semi-bold" align="left" className="characteristic__title">
                Screen
              </Text>
              <Text tag="p" size="sm" weight="semi-bold" align="left">
                {screen}
              </Text>
            </div>

            <div className="info__details">
              <Text tag="p" size="sm" weight="semi-bold" align="left" className="characteristic__title">
                Resolution
              </Text>
              <Text tag="p" size="sm" weight="semi-bold" align="left">
                {resolution}
              </Text>
            </div>

            <div className="info__details">
              <Text tag="p" size="sm" weight="semi-bold" align="left" className="characteristic__title">
                Processor
              </Text>
              <Text tag="p" size="sm" weight="semi-bold" align="left">
                {processor}
              </Text>
            </div>

            <div className="info__details">
              <Text tag="p" size="sm" weight="semi-bold" align="left" className="characteristic__title">
                RAM
              </Text>
              <Text tag="p" size="sm" weight="semi-bold" align="left">
                {ram}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
