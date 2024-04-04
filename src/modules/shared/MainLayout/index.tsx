import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '@/modules/shared/Header/Header';

const MainLayout = () => {
  return (
    <>
      <Header />
      <div className="main">
        <div className="main__content">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
