import React, { useEffect } from 'react';
import Breadcrumbs from '@/modules/shared/Breadcrumbs/Breadcrumbs';
import Catalog from '@/modules/shared/Catalog/Catalog';
import TitleProduct from '@/modules/shared/TitleProduct/TitleProduct';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { setTablets, setErrorTablets, setLoadingTablets } from '@/feature/tabletsReducer';
import { TProduct } from '@/modules/shared/ProductItem/products';

function TabletsPage() {
  const dispatch = useAppDispatch();
  const tablets = useAppSelector((state) => state.tablets.tablets);

  const getTablets = async () => {
    try {
      dispatch(setErrorTablets(false));
      setLoadingTablets(true);
      const response = await fetch('/api/products.json');
      const productsFromServer: TProduct[] = await response.json();
      const tablets = productsFromServer.filter((item) => item.category.includes('tablets'));
      dispatch(setTablets(tablets));
    } catch (error) {
      dispatch(setErrorTablets(true));
    } finally {
      dispatch(setLoadingTablets(false));
    }
  };

  useEffect(() => {
    getTablets();
  }, []);
  return (
    <>
      <Breadcrumbs />
      <TitleProduct title="Tablets" quantity={tablets.length} />
      {tablets.length !== 0 && <Catalog products={tablets} />}
    </>
  );
}

export default TabletsPage;
