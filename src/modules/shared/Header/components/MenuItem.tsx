import { FC } from 'react';
import { IMenuLink } from '../constants';
import { NavLink } from 'react-router-dom';

interface IProps {
  item: IMenuLink;
}

const MenuItem: FC<IProps> = ({ item }) => {
  return (
    <li className="nav__item">
      <NavLink className="nav__link" to={item.link}>
        {item.label}
      </NavLink>
    </li>
  );
};

export default MenuItem;
