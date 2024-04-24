import React from 'react';
import HeroSection from '@/modules/HomePage/components/HeroSection/HeroSection';
import NewModelSection from '@/modules/HomePage/components/NewModelSection/NewModelSection';
import Categories from '@/modules/HomePage/components/Categories/Categories';

const items = ['1', '2'];

function HomePage() {
  return (
    <>
      <HeroSection />
      <NewModelSection />
      <Categories />
    </>
  );
}

export default HomePage;
