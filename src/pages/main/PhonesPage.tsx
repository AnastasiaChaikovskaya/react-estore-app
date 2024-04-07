import Button from '@/components/ButtonComponent/Button';
import IconComponent from '@/components/IconComponent';
import React from 'react';

function PhonesPage() {
  return (
    <>
      <Button variant="link" size="sm" iconLeft={<IconComponent name="arrow-left" />}>
        sdfsdfsd
      </Button>

      <Button variant="default" size="sm">
        <IconComponent name="heart" />
      </Button>
    </>
  );
}

export default PhonesPage;
