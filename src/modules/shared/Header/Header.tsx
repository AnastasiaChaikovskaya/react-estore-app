import React, { useState } from 'react';
import MenuDesktop from '@/modules/shared/Header/components/MenuDesktop';
import IconComponent from '@/components/IconComponent';
import HeaderLogo from '@/assets/icons/header-logo.svg?react';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from '@/hooks';
import Text from '@/components/Text/Text';
import MenuMobile from './components/MenuMobile/MenuMobile';
import { scrollToTop } from '@/helpers/scrollToTop';
import { PUBLIC_ROUTS } from '@/contstants/routs';

export const Header = () => {
  const favorites = useAppSelector((state) => state.favorites.favorites);
  const cart = useAppSelector((state) => state.cart.cartProducts);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleOpenMobileMenu = () => {
    setIsOpenMenu(!isOpenMenu);
    scrollToTop();

    document.body.classList.toggle('no-scroll', !isOpenMenu);
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__top-bar">
            <div className="header__container">
              <NavLink to={PUBLIC_ROUTS.HOME} onClick={scrollToTop}>
                <HeaderLogo color="black" width={80} height={26} />
              </NavLink>

              <MenuMobile isOpen={isOpenMenu} handleOpen={handleOpenMobileMenu} />
              <MenuDesktop />
            </div>

            <div className="header__icon" onClick={handleOpenMobileMenu}>
              <IconComponent name={isOpenMenu ? 'close-icon' : 'menu-icon'} width={16} height={16} />
            </div>

            <div className="header__right">
              <NavLink to={'/favorites'} className="header__right--fav">
                <IconComponent name="heart" width={16} height={16} />
                {favorites.length !== 0 && (
                  <div className="header__right--circle">
                    <Text tag="span" weight="medium" style={{ fontSize: '9px' }} className="header__right--quantity">
                      {favorites.length}
                    </Text>
                  </div>
                )}
              </NavLink>
              <NavLink to={'/cart'} className="header__right--cart">
                <IconComponent name="shop-cart" width={16} height={16} />
                {cart.length !== 0 && (
                  <div className="header__right--circle">
                    <Text tag="span" weight="medium" style={{ fontSize: '9px' }} className="header__right--quantity">
                      {cart.length}
                    </Text>
                  </div>
                )}
              </NavLink>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
