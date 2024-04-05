import SelectorComponent from '@/components/SelectorComponent/SlectorComponent';
import React from 'react';
// import Home from '../modules/shared/HomePage/Home';

const items = ['1', '2'];

function HomePage() {
  return <SelectorComponent width={176} placeholder="Sort by" items={items} />;
}

export default HomePage;
