import React, { useEffect, useState } from 'react';
import ProductSlider from '@/modules/shared/ProductSlider/ProductSlider';
import { TProduct } from '@/modules/shared/ProductItem/products';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { setPhones, setErrorPhones, setLoadingPhones } from '@/feature/phonesReducer';

const NewModelSection = () => {
  const { phones } = useAppSelector((state) => state.phones);

  return (
    <div className="new-model__section">
      <ProductSlider products={phones.slice(0, 10)} heading="Brand new models" />
    </div>
  );
};
export default NewModelSection;
