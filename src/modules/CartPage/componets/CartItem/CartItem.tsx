import React, { FC, useState } from 'react';
import Button from '@/components/ButtonComponent/Button';
import Heading from '@/components/Heading/Heading';
import IconComponent from '@/components/IconComponent';
import Text from '@/components/Text/Text';
import { TCartProduct } from '@/modules/shared/ProductItem/products';
import '@/modules/CartPage/componets/CartItem/CartItem.scss';
import { incrementCount, decrementCount, removeFromCart } from '@/feature/cartReducer';
import { useAppDispatch } from '@/hooks';

interface ICartItemProps {
  item: TCartProduct;
}

const CartItem: FC<ICartItemProps> = ({ item }) => {
  const { image, name, count, totalAmount } = item;
  const disableMinusButton = count === 1;
  const dispatch = useAppDispatch();

  const handleIncrementCount = (product: TCartProduct) => {
    dispatch(incrementCount(product));
  };

  const handleDecrementCount = (product: TCartProduct) => {
    dispatch(decrementCount(product));
  };

  const handleRemoveFromCart = (product: TCartProduct) => {
    dispatch(removeFromCart(product.itemId));
  };

  return (
    <div className="cart-item">
      <div className="cart-item__main-info">
        <Button variant="default" size="sm" className="cart-item__delete" onClick={() => handleRemoveFromCart(item)}>
          <IconComponent name="close-icon" width={16} height={16} color="#89939A" />
        </Button>
        <div>
          <img src={image} alt="product image" className="cart-item__img" />
        </div>
        <Text tag="p" size="base" align="left" weight="semi-bold" className="cart-item__name">
          {name}
        </Text>
      </div>
      <div className="cart-item__prise-info">
        <div className="cart-item__count">
          <Button variant="default" size="sm" disabled={disableMinusButton} onClick={() => handleDecrementCount(item)}>
            <IconComponent name="minus-icon" height={16} width={16} />
          </Button>
          <Text tag="p" size="base" weight="semi-bold">
            {count}
          </Text>
          <Button variant="default" size="sm" onClick={() => handleIncrementCount(item)}>
            <IconComponent name="plus-icon" height={16} width={16} />
          </Button>
        </div>
        <Heading tag="h3" size="3" weight="bold" className="cart-item__prise">{`$${totalAmount}`}</Heading>
      </div>
    </div>
  );
};

export default CartItem;
