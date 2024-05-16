import React, { FC } from 'react';
import Button from '@/components/ButtonComponent/Button';
import Heading from '@/components/Heading/Heading';
import Text from '@/components/Text/Text';
import { useAppSelector } from '@/hooks';
import CartItem from '../CartItem/CartItem';
import '@/modules/CartPage/componets/CartCatalog/CartCatalog.scss';
import EmptyPage from '@/modules/shared/EmptyPage/EmptyPage';

const CartCatalog = () => {
  const cart = useAppSelector((state) => state.cart.cartProducts);
  const total = cart.reduce((sum, item) => sum + item.totalAmount, 0);
  const totalCount = cart.reduce((sum, item) => sum + item.count, 0);
  return cart.length !== 0 ? (
    <div className="cart">
      <div className="cart__products">
        {cart.map((item) => (
          <CartItem item={item} />
        ))}
      </div>
      <div className="cart__info">
        <div className="cart__price">
          <Heading tag="h2" size="2" weight="bold" className="cart__full-price">
            {`$${total}`}
          </Heading>
          <Text
            tag="p"
            size="base"
            weight="medium"
            className="cart__total-quantity"
          >{`total for ${totalCount} items`}</Text>
        </div>
        <Button variant="primary" size="lg">
          CheckOut
        </Button>
      </div>
    </div>
  ) : (
    <EmptyPage />
  );
};

export default CartCatalog;
