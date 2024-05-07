import { TProduct } from '@/modules/shared/ProductItem/products';

export const getSortProducts = (sortQuery: string, products: TProduct[]) => {
  switch (sortQuery) {
    case 'Oldest':
      return products.sort((item1, item2) => item1.year - item2.year);
    case 'Newest':
      return products.sort((item1, item2) => item2.year - item1.year);

    default:
      return products;
  }
};
