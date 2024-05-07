import React from 'react';
import MenuDesktop from '@/modules/shared/Header/components/MenuDesktop';
import IconComponent from '@/components/IconComponent';
import HeaderLogo from '@/assets/icons/header-logo.svg?react';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__top-bar">
            <div className="header__container">
              <a href="h">
                <HeaderLogo color="black" width={80} height={26} />
              </a>

              <MenuDesktop />
            </div>

            <div className="header__icon">
              <IconComponent name="menu-icon" width={14} height={9} />
            </div>

            <div className="header__right">
              <NavLink to={'/favorites'} className="header__right--fav">
                <IconComponent name="heart" width={16} height={16} />
              </NavLink>
              <NavLink to={'/cart'} className="header__right--cart">
                <IconComponent name="shop-cart" width={16} height={16} />
              </NavLink>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
