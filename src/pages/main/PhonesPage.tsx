import Button from '@/components/ButtonComponent/Button';
import { BUTTON_SIZE, BUTTON_VARIANTS } from '@/components/ButtonComponent/types';
import IconComponent from '@/components/IconComponent';
import React from 'react';

function PhonesPage() {
  return (
    <>
      {/* <Button variant={BUTTON_VARIANTS.SliderButton} size={BUTTON_SIZE.Small}>
        <IconComponent name="arrow-left" width={16} height={16} />
      </Button>

      <Button variant={BUTTON_VARIANTS.ColorButton} size={BUTTON_SIZE.Small}></Button> */}

      {/* <Button variant={BUTTON_VARIANTS.FavButton} size={BUTTON_SIZE.Small}>
        <IconComponent name="heart" width={16} height={16} />
      </Button> */}

      {/* <Button variant={BUTTON_VARIANTS.Pagination} size={BUTTON_SIZE.Small}>
        1
      </Button> */}

      <Button variant={BUTTON_VARIANTS.Primary} size={BUTTON_SIZE.Large}>
        Primary
      </Button>

      {/* <Button variant={BUTTON_VARIANTS.PrimarySelected} size={BUTTON_SIZE.Large}>
        Primary
      </Button> */}
    </>
  );
}

export default PhonesPage;
