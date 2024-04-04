import React, { FC } from 'react';

type Props = {
  plaseholder: string;
  items: string[];
};

const SelectorComponent: FC<Props> = ({ plaseholder, items }) => {
  return (
    <div className="selector">
      <button className="selector__button">{plaseholder}</button>
      {items.map((item, index) => (
        <div className="selector__item" key={index}>
          {item}
        </div>
      ))}
    </div>
  );
};

export default SelectorComponent;
