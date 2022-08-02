import React from 'react';
import style from './OutOfStock.module.scss';
type OutOfStockProps = {
  children: JSX.Element;
  inStock: boolean;
};

const OutOfStock = ({ children, inStock }: OutOfStockProps) => {
  return (
    <div className={style.Box}>
      {children}
      {!inStock ? <div className={style.OutOfStock}>Out of Stock</div> : ''}
    </div>
  );
};

export default OutOfStock;
