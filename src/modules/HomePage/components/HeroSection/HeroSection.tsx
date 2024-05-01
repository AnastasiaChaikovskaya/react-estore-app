import React from 'react';
import Heading from '@/components/Heading/Heading';
import '@/modules/HomePage/components/HeroSection/HeroSection.scss';
import { banners } from '@/modules/HomePage/components/MainSlider/config';
import MainSlider from '../MainSlider/MainSlider';

const HeroSection = () => {
  return (
    <div className="main__section">
      <Heading tag="h1" size="1" weight="bold" align="left" className="main__title">
        Welcome to Nice Gadgets store!
      </Heading>

      <MainSlider imgURL={banners} />
    </div>
  );
};

export default HeroSection;
