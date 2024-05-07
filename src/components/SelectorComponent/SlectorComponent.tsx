import React, { FC, useEffect, useRef, useState } from 'react';
import '@/components/SelectorComponent/SelectorComponent.scss';
import IconComponent from '../IconComponent';
import { useSearchParams } from 'react-router-dom';
import clsx from 'clsx';

type TItem<T> = T;

type Props<T> = {
  placeholder: string;
  value: string | null;
  items: TItem<T>[];
  width: number;
  onChange: (newValueL: string) => void;
};

const SelectorComponent: FC<Props<string>> = ({ placeholder, items, width, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const selectorRef = useRef<HTMLDivElement>(null);

  const handleOpenSelector = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleDocumentClick = (event: MouseEvent) => {
      if (selectorRef.current && !selectorRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleDocumentClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleDocumentClick);
    };
  }, [isOpen]);

  return (
    <div className="selector" style={{ width: width }} ref={selectorRef}>
      <label className="selector__name">{placeholder}</label>

      <button className="selector__button" onClick={handleOpenSelector}>
        <span className="selector__placeholder">{value ? value : items[0]}</span>
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
            <div
              className={clsx('selector__item', { 'selector__item--active': item === value })}
              key={index}
              onClick={() => {
                onChange(item);
                setIsOpen(false);
              }}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectorComponent;
