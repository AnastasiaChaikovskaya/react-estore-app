import { FC } from 'react';
import { TProduct } from '../ProductItem/products';
import Heading from '@/components/Heading/Heading';
import ProductItem from '../ProductItem/ProductItem';
import Button from '@/components/ButtonComponent/Button';
import IconComponent from '@/components/IconComponent';
import '@/modules/shared/ProductSlider/ProductSlider.scss';

interface IProductSliderProps {
  products: TProduct[];
  heading: string;
}

const ProductSlider: FC<IProductSliderProps> = ({ products, heading }) => {
  return (
    <div className="slider-product">
      <div className="slider-product__info">
        <Heading tag="h2" weight="bold" className="slider-product__info--heading">
          {heading}
        </Heading>
        <div className="slider-product__button">
          <Button>
            <IconComponent name="arrow-left" height={16} width={16} />
          </Button>
          <Button>
            <IconComponent name="arrow-right" height={16} width={16} />
          </Button>
        </div>
      </div>
      <div className="slider-product__content">
        {products.map((item) => (
          <ProductItem key={item.id} productItem={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductSlider;
