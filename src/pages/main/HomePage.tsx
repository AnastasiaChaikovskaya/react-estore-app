import React from 'react';
import HeroSection from '@/modules/HomePage/components/HeroSection/HeroSection';
import NewModelSection from '@/modules/HomePage/components/NewModelSection/NewModelSection';

const items = ['1', '2'];

function HomePage() {
  return (
    <>
      <HeroSection />
      <NewModelSection />
    </>
  );
}

export default HomePage;
