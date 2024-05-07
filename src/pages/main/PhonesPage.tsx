import React from 'react';
import Breadcrumbs from '@/modules/shared/Breadcrumbs/Breadcrumbs';
import Catalog from '@/modules/shared/Catalog/Catalog';
import TitleProduct from '@/modules/shared/TitleProduct/TitleProduct';
import { useAppSelector } from '@/hooks';

function PhonesPage() {
  const phones = useAppSelector((state) => state.phones.phones);
  return (
    <>
      <Breadcrumbs />
      <TitleProduct title="Mobile phones" quantity={phones.length} />
      <Catalog products={phones} />
    </>
  );
}

export default PhonesPage;
