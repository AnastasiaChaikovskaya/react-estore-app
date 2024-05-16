import SelectorComponent from '@/components/SelectorComponent/SlectorComponent';
import '@/modules/shared/Catalog/Catalog.scss';
import ProductItem from '../ProductItem/ProductItem';
import { useSearchParams } from 'react-router-dom';
import Pagination from '../Pagination/Pagination';
import { FC, useEffect } from 'react';
import { TProduct } from '../ProductItem/products';
import { getSortProducts } from '@/helpers/getSortproducts';
import EmptyPage from '../EmptyPage/EmptyPage';

const sortParam = ['Newest', 'Oldest'];
const itemsOnPageArray = ['16', '20', '24', '28'];

interface ICatalogProps {
  products: TProduct[];
}

const Catalog: FC<ICatalogProps> = ({ products }) => {
  const [searchParams, setSearchParams] = useSearchParams('?page=1&perPage=16');
  const perPage = searchParams.get('perPage') || '16';
  const page = searchParams.get('page') || 1;
  const sort = searchParams.get('sort') || 'Newest';
  const firstItem = (+page - 1) * +perPage;
  const lastItem = Math.min(+page * +perPage, products.length);
  const visibleItems = getSortProducts(sort, products.slice(firstItem, lastItem));

  const handleSelectPerPage = (newValue: string) => {
    searchParams.set('perPage', newValue);
    setSearchParams(searchParams);
  };

  const handleSelectSort = (newValue: string) => {
    searchParams.set('sort', newValue);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    setSearchParams(`?page=${page}&perPage=${perPage}&sort=${sort}`);
  }, []);

  return visibleItems.length !== 0 ? (
    <div className="products">
      <div className="products__filter">
        <SelectorComponent
          items={sortParam}
          placeholder="Sort by"
          width={187}
          value={sort}
          onChange={handleSelectSort}
        />
        <SelectorComponent
          items={itemsOnPageArray}
          placeholder="Items on page"
          width={187}
          value={perPage}
          onChange={handleSelectPerPage}
        />
      </div>

      <div className="products__items">
        {visibleItems.map((item) => (
          <ProductItem productItem={item} key={item.id} />
        ))}
      </div>

      {products.length > +perPage && <Pagination products={products} />}
    </div>
  ) : (
    <EmptyPage />
  );
};

export default Catalog;
