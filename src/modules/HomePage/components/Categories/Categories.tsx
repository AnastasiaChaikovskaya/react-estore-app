import React, { useEffect, useState } from 'react';
import Heading from '@/components/Heading/Heading';
import Text from '@/components/Text/Text';
import { TProduct } from '@/modules/shared/ProductItem/products';
import Accessories from '@/assets/categories/accesories.png';
import Tablets from '@/assets/categories/tablets.png';
import Phones from '@/assets/categories/phones.png';
import '@/modules/HomePage/components/Categories/Categories.scss';
import { NavLink } from 'react-router-dom';
import { MENU_LINKS } from '@/modules/shared/Header/constants';
import { PUBLIC_ROUTS } from '@/contstants/routs';
import { scrollToTop } from '@/helpers/scrollToTop';

const Categories = () => {
  const [quantityOfPhones, setQuantityOfPhones] = useState(0);
  const [quantityOfTablets, setQuantityOfTablets] = useState(0);
  const [quantityOfAccessories, setQuantityOfAccessories] = useState(0);
  const getProducts = async () => {
    try {
      const response = await fetch('/api/products.json');
      const productsFromServer: TProduct[] = await response.json();

      const quantityOfPhonesServer = productsFromServer.filter((item) => item.category === 'phones').length;
      setQuantityOfPhones(quantityOfPhonesServer);

      const quantityOfTabletsFromServer = productsFromServer.filter((item) => item.category === 'tablets').length;
      setQuantityOfTablets(quantityOfTabletsFromServer);

      const quantityOfAccessoriesFromServer = productsFromServer.filter(
        (item) => item.category === 'accessories',
      ).length;
      setQuantityOfAccessories(quantityOfAccessoriesFromServer);
    } catch (error) {}
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="categories">
      <Heading tag="h2" size="2" align="left" className="categories__title" weight="bold">
        Shop by category
      </Heading>
      <div className="categories__wrapper">
        <NavLink to={PUBLIC_ROUTS.PHONES} className="category" onClick={scrollToTop}>
          <div className="category__bg-phones">
            <img src={Phones} alt="/" className="category__img" />
          </div>
          <div className="category__info">
            <Heading tag="h4" size="4" align="left" weight="semi-bold" className="category__title">
              Mobile phones
            </Heading>
            <Text tag="p" size="base" align="left">
              {`${quantityOfPhones} models`}
            </Text>
          </div>
        </NavLink>

        <NavLink to={PUBLIC_ROUTS.TABLETS} className="category" onClick={scrollToTop}>
          <div className="category__bg-tablets">
            <img src={Tablets} alt="/" className="category__img" />
          </div>
          <div className="category__info">
            <Heading tag="h4" size="4" align="left" weight="semi-bold" className="category__title">
              Tablets
            </Heading>
            <Text tag="p" size="base" align="left">
              {`${quantityOfTablets} models`}
            </Text>
          </div>
        </NavLink>

        <NavLink to={PUBLIC_ROUTS.ACCESSORIES} className="category" onClick={scrollToTop}>
          <div className="category__bg-accessories">
            <img src={Accessories} alt="/" className="category__img" />
          </div>
          <div className="category__info">
            <Heading tag="h4" size="4" align="left" weight="semi-bold" className="category__title">
              Accessories
            </Heading>
            <Text tag="p" size="base" align="left">
              {`${quantityOfAccessories} models`}
            </Text>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Categories;
