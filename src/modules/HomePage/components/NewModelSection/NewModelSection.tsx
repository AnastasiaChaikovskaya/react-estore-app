import React, { useEffect, useState } from 'react';
import ProductSlider from '@/modules/shared/ProductSlider/ProductSlider';
import { TAccessories, TPhone, TProduct, TTablet } from '@/modules/shared/ProductItem/products';

const NewModelSection = () => {
  const [products, setProducts] = useState<TProduct[]>([]);

  const getNewProducts = async () => {
    try {
      const response = await fetch('/api/products.json');
      const productsFromServer: TProduct[] = await response.json();
      const newModels = productsFromServer
        .filter((item) => item.category.includes('phones') && item.year >= 2022)
        .slice(0, 10);
      setProducts(newModels);
    } catch (error) {}
  };

  useEffect(() => {
    getNewProducts();
  }, []);

  return (
    <div className="container">
      <div className="new-model__section">
        <ProductSlider products={products} heading="Brand new models" />
      </div>
    </div>
  );
};
export default NewModelSection;
