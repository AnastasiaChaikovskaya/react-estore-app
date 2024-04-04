import React from 'react';
import MenuDesktop from '@/modules/shared/Header/components/MenuDesktop';
import IconComponent from '@/components/IconComponent';
import HeaderLogo from '@/assets/icons/header-logo.svg?react';

export const Header = () => {
  return (
    <>
      <div className="container">
        <header className="header">
          <div className="header__top-bar">
            <a href="h">
              <HeaderLogo color="black" width={80} height={26} />
            </a>

            <div className="header__icon">
              <IconComponent name="menu-icon" width={14} height={9} />
            </div>

            <MenuDesktop />

            <div className="header__right">
              <div className="header__right--fav">
                <IconComponent name="heart" width={16} height={16} />
              </div>
              <div className="header__right--cart">
                <IconComponent name="shop-cart" width={16} height={16} />
              </div>
            </div>
          </div>
        </header>
      </div>
      <div className="header__line"></div>
    </>
  );
};
