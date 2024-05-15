import React from 'react';
import TitleProduct from '@/modules/shared/TitleProduct/TitleProduct';
import { useAppSelector } from '@/hooks';
import Catalog from '@/modules/shared/Catalog/Catalog';

const FavoritePage = () => {
  const { favorites } = useAppSelector((state) => state.favorites);
  return (
    <>
      <TitleProduct title="Favorites" quantity={favorites.length} />
      <Catalog products={favorites} />
    </>
  );
};

export default FavoritePage;
