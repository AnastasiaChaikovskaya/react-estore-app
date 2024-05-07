import Button from '@/components/ButtonComponent/Button';
import IconComponent from '@/components/IconComponent';
import '@/modules/shared/Pagination/Pagination.scss';
import { useAppSelector } from '@/hooks';
import { useSearchParams } from 'react-router-dom';
import clsx from 'clsx';
import { getCountOfPages } from '@/helpers/getCountOfPages';
import { TProduct } from '../ProductItem/products';
import { FC } from 'react';

interface IPaginationProps {
  products: TProduct[];
}

const Pagination: FC<IPaginationProps> = ({ products }) => {
  const [searchParams, setSearchParams] = useSearchParams('?page=1&perPage=10');

  const perPage = searchParams.get('perPage') ?? 10;
  const count = Math.ceil(products.length / +perPage);
  const currentPage = searchParams.get('page') ?? 1;
  const pages = getCountOfPages(count);
  const isPrevDisable = +currentPage === 1;
  const isNextPageDisable = +currentPage === pages.length;

  const handleButtonOnClick = (page: number) => {
    searchParams.set('page', page.toString());
    setSearchParams(searchParams);
  };

  const handleButtonNextPage = () => {
    searchParams.set('page', (+currentPage + 1).toString());
    setSearchParams(searchParams);
  };

  const handleButtonPrevPage = () => {
    searchParams.set('page', (+currentPage - 1).toString());
    setSearchParams(searchParams);
  };

  return (
    <div className="pagination">
      <Button variant="default" size="sm" onClick={handleButtonPrevPage} disabled={isPrevDisable}>
        <IconComponent name="arrow-left" width={16} height={16} />
      </Button>
      <div className="pagination__pages">
        {pages.map((item) => (
          <Button
            key={item}
            variant="default"
            size="sm"
            onClick={() => handleButtonOnClick(item)}
            className={clsx('pagination__button', { 'pagination__button--active': item === +currentPage })}
          >
            {item}
          </Button>
        ))}
      </div>
      <Button variant="default" size="sm" onClick={handleButtonNextPage} disabled={isNextPageDisable}>
        <IconComponent name="arrow-right" width={16} height={16} />
      </Button>
    </div>
  );
};

export default Pagination;
