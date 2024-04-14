import React, { FC, useState } from 'react';
import '@/modules/HomePage/components/MainSlider/MainSlider.scss';
import Button from '@/components/ButtonComponent/Button';
import IconComponent from '@/components/IconComponent';
import { useSwipeable } from 'react-swipeable';
import clsx from 'clsx';

interface ISliderProps {
  imgURL: string[];
}

const MainSlider: FC<ISliderProps> = ({ imgURL }) => {
  const [currentImg, setCurrentImg] = useState(0);

  const isDisabledPrev = currentImg === 0;
  const isDisabledNext = currentImg === imgURL.length - 1;

  const handleSwipeLeft = () => {
    if (currentImg > 0) {
      setCurrentImg(currentImg - 1);
    }
  };

  const handleSwipeRight = () => {
    if (currentImg < imgURL.length - 1) {
      setCurrentImg(currentImg + 1);
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleSwipeRight,
    onSwipedRight: handleSwipeLeft,
    trackMouse: true,
    preventScrollOnSwipe: true,
  });

  return (
    <div className="main__slider">
      <div className="slider">
        <Button
          variant="default"
          size="sm"
          className="slider__button"
          onClick={handleSwipeLeft}
          disabled={isDisabledPrev}
        >
          <IconComponent name="arrow-left" height={16} width={16} />
        </Button>
        <div className="slider__container" {...handlers}>
          {imgURL.map((url, index) => (
            <div className={clsx('slider__background', { active: index === currentImg })}>
              <img key={index} src={url} className="slider__img" />
            </div>
          ))}
        </div>
        <Button
          variant="default"
          size="sm"
          className="slider__button"
          onClick={handleSwipeRight}
          disabled={isDisabledNext}
        >
          <IconComponent name="arrow-right" height={16} width={16} />
        </Button>
      </div>

      <div className="dots">
        {imgURL.map((img, index) => (
          <div key={index} className={clsx('dots__dot', { 'dots__dot--active': currentImg === index })}></div>
        ))}
      </div>
    </div>
  );
};

export default MainSlider;