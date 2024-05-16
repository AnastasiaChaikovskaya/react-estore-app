import { FC } from 'react';
import { IMenuLink } from '../constants';
import { NavLink } from 'react-router-dom';
import { getIsActiveClass } from '@/helpers/getIsActiveClass';
import { scrollToTop } from '@/helpers/scrollToTop';

interface IProps {
  item: IMenuLink;
}

const MenuItem: FC<IProps> = ({ item }) => {
  return (
    <li className="nav__item">
      <NavLink className={getIsActiveClass} to={item.link} onClick={scrollToTop}>
        {item.label}
      </NavLink>
    </li>
  );
};

export default MenuItem;
