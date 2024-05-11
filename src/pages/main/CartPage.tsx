import React from 'react';
import CartItem from '@/modules/CartPage/componets/CartItem/CartItem';
import { TProduct } from '@/modules/shared/ProductItem/products';
import TitleProduct from '@/modules/shared/TitleProduct/TitleProduct';
import { useAppSelector } from '@/hooks';
import Button from '@/components/ButtonComponent/Button';
import { useNavigate } from 'react-router-dom';
import IconComponent from '@/components/IconComponent';
import CartCatalog from '@/modules/CartPage/componets/CartCatalog/CartCatalog';

const CartPage = () => {
  const cart = useAppSelector((state) => state.cart.cartProducts);
  const navigate = useNavigate();
  return (
    <>
      <Button
        variant="link"
        className="navigate-buttons__back"
        iconLeft={<IconComponent name="arrow-left" height={16} width={16} />}
        onClick={() => {
          navigate('../');
        }}
      >
        Back
      </Button>
      <TitleProduct title="Cart" quantity={cart.length} />
      <CartCatalog />
    </>
  );
};

export default CartPage;
