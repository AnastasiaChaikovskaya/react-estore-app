import React from 'react';
import HeaderLogo from '@/assets/icons/header-logo.svg?react';
import { NavLink } from 'react-router-dom';
import MenuFooter from './components/MenuFooter';
import Text from '@/components/Text/Text';
import Button from '@/components/ButtonComponent/Button';
import IconComponent from '@/components/IconComponent';
import '@/modules/shared/Footer/Footer.scss';

const Footer = () => {
  return (
    <div className="container">
      <div className="footer">
        <NavLink to={'/'}>
          <HeaderLogo width={89} height={30} color="black" />
        </NavLink>

        <div className="footer__menu">
          <MenuFooter />
        </div>

        <div className="footer__back">
          <Text tag="p" size="sm" align="left" className="footer__back-text">
            Back to top
          </Text>
          <Button variant="default" size="sm">
            <IconComponent name="arrow-up" height={16} width={16} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
