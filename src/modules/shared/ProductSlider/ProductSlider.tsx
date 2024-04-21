import { FC, useEffect, useLayoutEffect, useRef, useState } from 'react';
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

const STEP = 1;
const WIDTH = 272 + 16;

const ProductSlider: FC<IProductSliderProps> = ({ products, heading }) => {
  const [currentImg, setCurrentImg] = useState(0);
  const [currentActiveSlides, setCurrentActiveSlides] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);

  const handleNextSlide = () => {
    if (currentImg !== products.length - currentActiveSlides) {
      setCurrentImg(
        currentImg + STEP < products.length - currentActiveSlides
          ? currentImg + STEP
          : products.length - currentActiveSlides + 0.5,
      );
    }
  };

  const handlePrevSlide = () => {
    if (currentImg !== 0) {
      setCurrentImg(currentImg - STEP > 0 ? currentImg - STEP : 0);
    }
  };

  useEffect(() => {
    if (containerRef && containerRef.current && products.length > 0) {
      const { width } = containerRef.current.getBoundingClientRect();
      setCurrentActiveSlides(Math.ceil(width / WIDTH));
      console.log(width);
    }
  }, [containerRef.current]);

  console.log(currentActiveSlides);
  console.log(currentImg);

  return (
    <div className="slider-product">
      <div className="slider-product__info">
        <Heading tag="h2" weight="bold" size="2" className="slider-product__info--heading">
          {heading}
        </Heading>
        <div className="slider-product__button">
          <Button variant="default" size="sm" onClick={handlePrevSlide}>
            <IconComponent name="arrow-left" height={16} width={16} />
          </Button>
          <Button variant="default" size="sm" onClick={handleNextSlide}>
            <IconComponent name="arrow-right" height={16} width={16} />
          </Button>
        </div>
      </div>
      <div className="slider-product__content" ref={containerRef}>
        {products.map((item) => (
          <div
            key={item.id}
            style={{ transform: `translateX(-${currentImg * WIDTH}px)`, transition: `all 0.3s ease-in-out` }}
          >
            <ProductItem productItem={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSlider;
