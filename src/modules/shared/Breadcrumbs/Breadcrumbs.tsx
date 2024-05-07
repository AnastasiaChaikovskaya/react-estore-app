import IconComponent from '@/components/IconComponent';
import Text from '@/components/Text/Text';
import { Link, useLocation } from 'react-router-dom';
import '@/modules/shared/Breadcrumbs/Breadcrumbs.scss';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathNames = location.pathname.split('/').filter((path) => path);
  return (
    <div className="breadcrumbs">
      <Link to="/" className="breadcrumbs__home">
        <IconComponent name="home" height={16} width={16} color="black" />
      </Link>

      {pathNames.map((value, index) => {
        const last = index === pathNames.length - 1;
        const to = `/${pathNames.slice(0, index + 1).join('/')}`;

        return last ? (
          <span key={to} className="breadcrumbs__item">
            <IconComponent name="arrow-right" height={16} width={16} color="#B4BDC3" />
            <Text
              tag="span"
              size="sm"
              align="left"
              transform="capitalize"
              weight="semi-bold"
              className="breadcrumbs__active"
            >
              {value}
            </Text>
          </span>
        ) : (
          <Link to={to} key={to} className="breadcrumbs__item">
            <IconComponent name="arrow-right" height={16} width={16} color="#B4BDC3" />
            <Text
              tag="span"
              size="sm"
              align="left"
              weight="semi-bold"
              transform="capitalize"
              className="breadcrumbs__non-active"
            >
              {value.replace('-', ' ')}
            </Text>
          </Link>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
