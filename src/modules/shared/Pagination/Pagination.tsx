import Button from '@/components/ButtonComponent/Button';
import IconComponent from '@/components/IconComponent';
import '@/modules/shared/Pagination/Pagination.scss';
import { useAppSelector } from '@/hooks';
import { useSearchParams } from 'react-router-dom';

const Pagination = () => {
  const [searchParams, setSearchParams] = useSearchParams('?page=1&perPage=10');

  const perPage = searchParams.get('perPage') ?? 10;
  const count = useAppSelector((state) => Math.ceil(state.phones.phones.length / +perPage));

  const getArreyOfPages = (count: number) => {
    const pagesCount = [];

    for (let i = 1; i < count; i++) {
      pagesCount.push(i);
    }

    return pagesCount;
  };

  const pages = getArreyOfPages(count);

  return (
    <div className="pagination">
      <Button variant="default" size="sm">
        <IconComponent name="arrow-left" width={16} height={16} />
      </Button>
      <div className="pagination__pages">
        {pages.map((item) => (
          <Button key={item} variant="default" size="sm">
            {item}
          </Button>
        ))}
      </div>
      <Button variant="default" size="sm">
        <IconComponent name="arrow-right" width={16} height={16} />
      </Button>
    </div>
  );
};

export default Pagination;
