import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '@/modules/shared/Header/Header';
import Footer from '../Footer/Footer';

const MainLayout = () => {
  return (
    <>
      <Header />
      <div className="main">
        <div className="main__content">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
