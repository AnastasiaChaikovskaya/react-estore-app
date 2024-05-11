import { TProductDetails } from '@/modules/shared/ProductItem/products';

export const getResponse = async (category: 'phones' | 'tablets' | 'accessories', productId: string) => {
  let url = '/api/phones.json';

  if (category === 'phones') {
    url = '/api/phones.json';
  }

  if (category === 'accessories') {
    url = '/api/accessories.json';
  }

  if (category === 'tablets') {
    url = '/api/tablets.json';
  }

  const response = await fetch(url);

  const products: TProductDetails[] = await response.json();

  const currentProduct = products.find((item) => item.id === productId);

  return currentProduct;
};
