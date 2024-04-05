import React, { FC, useState } from 'react';
import '@/components/SelectorComponent/SelectorComponent.scss';
import IconComponent from '../IconComponent';

type TItem = string;

type Props = {
  placeholder: string;
  items: TItem[];
  width: number;
};

const SelectorComponent: FC<Props> = ({ placeholder, items, width }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<TItem | null>(null);

  const handleOpenSelector = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectOption = (item: TItem) => {
    setSelectedOption(item);
    setIsOpen(false);
  };

  return (
    <div className="selector" style={{ width: width }}>
      <label className="selector__name">{placeholder}</label>

      <button className="selector__button" onClick={handleOpenSelector}>
        <span className="selector__placeholder">{selectedOption ? selectedOption : placeholder}</span>
        <IconComponent
          name="arrow-down"
          width={16}
          height={16}
          color="#B4BDC3"
          style={{
            transform: `rotate(${isOpen ? 180 : 0}deg)`,
            transition: 'all 0.25s',
          }}
        />
      </button>

      {isOpen && (
        <div className="selector__menu">
          {items.map((item, index) => (
            <div className="selector__item" key={index} onClick={() => handleSelectOption(item)}>
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectorComponent;
