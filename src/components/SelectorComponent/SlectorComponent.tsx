import React, { FC } from 'react';
import '@/components/SelectorComponent/SelectorComponent.scss';
import IconComponent from '../IconComponent';

type Props = {
  placeholder: string;
  items: string[];
  width: number;
};

const SelectorComponent: FC<Props> = ({ placeholder, items, width }) => {
  return (
    <div className="selector" style={{ width: width }}>
      <label className="selector__name">{placeholder}</label>

      <button className="selector__button">
        <span className="selector__placeholder">{placeholder}</span>
        <IconComponent name="arrow-down" width={16} height={16} color="#B4BDC3" />
      </button>

      <div className="selector__menu">
        {items.map((item, index) => (
          <div className="selector__item" key={index}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectorComponent;
