import Button from '@/components/ButtonComponent/Button';
import { BUTTON_SIZE, BUTTON_VARIANTS } from '@/components/ButtonComponent/types';
import IconComponent from '@/components/IconComponent';
import React from 'react';

function PhonesPage() {
  return (
    <>
      <Button
        variant={BUTTON_VARIANTS.BackButton}
        size={BUTTON_SIZE.Large}
        iconLeft={<IconComponent name="arrow-left" />}
      >
        Primary
      </Button>

      <Button
        variant={BUTTON_VARIANTS.DefaultButton}
        size={BUTTON_SIZE.Small}
        iconLeft={<IconComponent name="heart" />}
      ></Button>
    </>
  );
}

export default PhonesPage;
