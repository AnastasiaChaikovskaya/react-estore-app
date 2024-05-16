import React from 'react';
import '@/modules/shared/EmptyPage/EmptyPage.scss';

const EmptyPage = () => {
  return (
    <div className="empty">
      <img src="/img/cart-is-empty.png" className="empty__img" />
    </div>
  );
};

export default EmptyPage;
