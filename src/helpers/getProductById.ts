import { TProduct } from '@/modules/shared/ProductItem/products';

export const getProductById = async (productId: string) => {
  const response = await fetch('/api/products.json');
  const productsFromServer: TProduct[] = await response.json();
  const productForAdd = productsFromServer.find((item) => item.itemId === productId);

  return productForAdd;
};
