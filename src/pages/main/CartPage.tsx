import React from 'react';
import CartItem from '@/modules/CartPage/componets/CartItem/CartItem';
import { TProduct } from '@/modules/shared/ProductItem/products';

const item: TProduct = {
  id: 155,
  category: 'tablets',
  itemId: 'apple-ipad-pro-11-2021-128gb-spacegray',
  name: 'Apple iPad Pro 11 (2021) 128GB Space Gray',
  capacity: '128GB',
  fullPrice: 799,
  price: 749,
  color: 'spacegray',
  image: 'img/tablets/apple-ipad-pro-11-2021/spacegray/00.webp',
  screen: "11' Liquid Retina",
  ram: '8GB',
  year: 2021,
};

const CartPage = () => {
  return <CartItem item={item} />;
};

export default CartPage;
