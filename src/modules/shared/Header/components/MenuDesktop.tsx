import React from 'react';
import { MENU_LINKS } from '@/modules/shared/Header/constants';
import MenuItem from '@/modules/shared/Header/components/MenuItem';

function MenuDesktop() {
  return (
    <div className="header__nav">
      <ul className="header__nav--list">
        {MENU_LINKS.map((item, index) => (
          <MenuItem item={item} key={index} />
        ))}
      </ul>
    </div>
  );
}

export default MenuDesktop;
