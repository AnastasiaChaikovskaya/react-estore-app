import React from 'react';
import MenuDesktop from '@/modules/shared/Header/components/MenuDesktop';

export const Header = () => {
  return (
    <>
      <div className="container">
        <header className="header">
          <div className="header__top-bar">
            <a href="h">
              <img src="./img/logo/header-logo.svg" alt="header logo" className="header__logo" />
            </a>

            <div className="header__icon">
              <img src="./img/icons/icon-menu.svg" alt="burger menu" />
            </div>
            <MenuDesktop />

            <div className="header__right">
              <div className="header__right--fav">
                <img src="./img/logo/header-fav.svg" alt="favorites" />
              </div>
              <div className="header__right--cart">
                <img src="./img/logo/header-cart.svg" alt="cart" />
              </div>
            </div>
          </div>
        </header>
      </div>
      <div className="header__line"></div>
    </>
  );
};
