import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '@/modules/shared/Header/Header';
import Footer from '../Footer/Footer';
import { useAppDispatch } from '@/hooks';
import { setLoadingPhones, setErrorPhones, setPhones } from '@/feature/phonesReducer';
import { TProduct } from '../ProductItem/products';

const MainLayout = () => {
  const dispatch = useAppDispatch();

  const getPhones = async () => {
    try {
      dispatch(setErrorPhones(false));
      dispatch(setLoadingPhones(true));
      const response = await fetch('/api/products.json');
      const productsFromServer: TProduct[] = await response.json();
      const phones = productsFromServer.filter((item) => item.category.includes('phones'));
      dispatch(setPhones(phones));
    } catch (error) {
      dispatch(setErrorPhones(true));
    } finally {
      dispatch(setLoadingPhones(false));
    }
  };

  useEffect(() => {
    getPhones();
  }, []);
  return (
    <>
      <Header />
      <div className="container">
        <div className="main">
          <div className="main__content">
            <Outlet />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
