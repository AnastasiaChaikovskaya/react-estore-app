import { TProduct } from '@/modules/shared/ProductItem/products';

export const getSortProducts = (sortQuery: string, products: TProduct[]) => {
  const sortedProducts = [...products];
  switch (sortQuery) {
    case 'Oldest':
      return sortedProducts.sort((item1, item2) => item1.year - item2.year);
    case 'Newest':
      return sortedProducts.sort((item1, item2) => item2.year - item1.year);

    default:
      return products;
  }
};
