import React from 'react';
import Breadcrumbs from '@/modules/shared/Breadcrumbs/Breadcrumbs';
import Catalog from '@/modules/shared/Catalog/Catalog';
import TitleProduct from '@/modules/shared/TitleProduct/TitleProduct';

function PhonesPage() {
  return (
    <>
      <Breadcrumbs />
      <TitleProduct title="Mobile phones" quantity={95} />
      <Catalog />
    </>
  );
}

export default PhonesPage;
