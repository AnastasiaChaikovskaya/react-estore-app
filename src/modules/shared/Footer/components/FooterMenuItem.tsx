import { NavLink } from 'react-router-dom';
import { FOOTER__LINKS, IFooterLink } from '../constants';
import { FC } from 'react';
import Text from '@/components/Text/Text';

interface IFooterMenuProps {
  item: IFooterLink;
}

const FooterMenuItem: FC<IFooterMenuProps> = ({ item }) => {
  return (
    <li className="footer__nav-item">
      <a href={item.link} className="footer__nav-link">
        <Text tag="p" size="sm" align="left" transform="uppercase" className="footer__nav-text">
          {item.label}
        </Text>
      </a>
    </li>
  );
};

export default FooterMenuItem;
