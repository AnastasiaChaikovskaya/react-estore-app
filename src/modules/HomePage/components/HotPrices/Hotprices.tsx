import React, { useEffect, useState } from 'react';
import ProductSlider from '@/modules/shared/ProductSlider/ProductSlider';
import { TProduct } from '@/modules/shared/ProductItem/products';

const HotPrices = () => {
  const [hotPrices, setHotPrices] = useState<TProduct[]>([]);
  const getHotPrices = async () => {
    try {
      const response = await fetch('/api/products.json');
      const productFromServer: TProduct[] = await response.json();
      const hotPricesFromServer = productFromServer.filter((item) => item.price < 900).slice(0, 10);
      setHotPrices(hotPricesFromServer);
    } catch (error) {}
  };

  useEffect(() => {
    getHotPrices();
  }, []);

  return (
    <div className="container">
      <div className="hot-prices">
        <ProductSlider products={hotPrices} heading="Hot prices" />
      </div>
    </div>
  );
};

export default HotPrices;
