import SelectorComponent from '@/components/SelectorComponent/SlectorComponent';
import '@/modules/shared/Catalog/Catalog.scss';
import { useAppSelector } from '@/hooks';
import ProductItem from '../ProductItem/ProductItem';
import { useSearchParams } from 'react-router-dom';
import Pagination from '../Pagination/Pagination';

const sortParam = ['Newest', 'Oldest'];
const itemsOnPage = ['10', '12', '14', '16'];

const Catalog = () => {
  const [searchParams, setSearchParams] = useSearchParams('?page=1&perPage=10');
  const phones = useAppSelector((state) => state.phones.phones);
  const perPage = searchParams.get('perPage') || 10;
  const page = searchParams.get('page') || 1;
  const firstItem = (+page - 1) * +perPage;
  const lastItem = Math.min(+page * +perPage, phones.length);
  const visibleItems = phones.slice(firstItem, lastItem);

  return (
    <div className="products">
      <div className="products__filter">
        <SelectorComponent items={sortParam} placeholder="Sort by" width={187} />
        <SelectorComponent items={itemsOnPage} placeholder="Items on page" width={187} />
      </div>

      <div className="products__items">
        {visibleItems.map((item) => (
          <ProductItem productItem={item} />
        ))}
      </div>

      <Pagination />
    </div>
  );
};

export default Catalog;
