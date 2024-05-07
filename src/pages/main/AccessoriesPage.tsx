import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks';
import Breadcrumbs from '@/modules/shared/Breadcrumbs/Breadcrumbs';
import Catalog from '@/modules/shared/Catalog/Catalog';
import TitleProduct from '@/modules/shared/TitleProduct/TitleProduct';
import { setAccessories, setErrorAccessories, setLoadingAccessories } from '@/feature/accessoriesReducer';
import { TProduct } from '@/modules/shared/ProductItem/products';

function AccessoriesPage() {
  const dispatch = useAppDispatch();
  const accessories = useAppSelector((state) => state.accessories.accessories);

  const getTablets = async () => {
    try {
      dispatch(setErrorAccessories(false));
      setLoadingAccessories(true);
      const response = await fetch('/api/products.json');
      const productsFromServer: TProduct[] = await response.json();
      const accessories = productsFromServer.filter((item) => item.category === 'accessories');
      dispatch(setAccessories(accessories));
    } catch (error) {
      dispatch(setErrorAccessories(true));
    } finally {
      dispatch(setLoadingAccessories(false));
    }
  };

  useEffect(() => {
    getTablets();
  }, []);

  return (
    <>
      <Breadcrumbs />
      <TitleProduct title="Mobile phones" quantity={accessories.length} />
      {accessories.length !== 0 && <Catalog products={accessories} />}
    </>
  );
}

export default AccessoriesPage;
