import React, { FC } from 'react';
import { MENU_LINKS } from '../../constants';
import { NavLink } from 'react-router-dom';
import IconComponent from '@/components/IconComponent';
import '@/modules/shared/Header/components/MenuMobile/MenuMobile.scss';
import Text from '@/components/Text/Text';
import { getActiveClassForMobileCart, getActiveClassForMobileMenu } from '@/helpers/getIsActiveClass';
import { useAppSelector } from '@/hooks';

interface IMenuMobileProps {
  isOpen: boolean;
  handleOpen: () => void;
}

const MenuMobile: FC<IMenuMobileProps> = ({ isOpen, handleOpen }) => {
  const cart = useAppSelector((state) => state.cart.cartProducts);
  const favorites = useAppSelector((state) => state.favorites.favorites);
  return (
    <div
      className="menu-mobile"
      style={isOpen ? { transform: 'translateX(0)', opacity: 1, pointerEvents: 'all' } : undefined}
    >
      <ul className="menu-mobile__top">
        {MENU_LINKS.map((item, index) => (
          <NavLink to={item.link} key={index} onClick={handleOpen} className={getActiveClassForMobileMenu}>
            {item.label}
          </NavLink>
        ))}
      </ul>

      <div className="menu-mobile__bottom">
        <NavLink to={'/favorites'} className={getActiveClassForMobileCart} onClick={handleOpen}>
          <IconComponent name="heart" height={16} width={16} color="#313237" />
          {favorites.length !== 0 && (
            <div className="menu-mobile__circle">
              <Text tag="span" weight="medium" style={{ fontSize: '9px' }} className="menu-mobile__quantity">
                {favorites.length}
              </Text>
            </div>
          )}
        </NavLink>
        <NavLink to={'/cart'} className={getActiveClassForMobileCart} onClick={handleOpen}>
          <IconComponent name="shop-cart" height={16} width={16} color="#313237" />
          {cart.length !== 0 && (
            <div className="menu-mobile__circle">
              <Text tag="span" weight="medium" style={{ fontSize: '9px' }} className="menu-mobile__quantity">
                {cart.length}
              </Text>
            </div>
          )}
        </NavLink>
      </div>
    </div>
  );
};

export default MenuMobile;
