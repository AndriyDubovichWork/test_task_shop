import React from 'react';
import style from './OutOfStock.module.scss';
type OutOfStockProps = {
  children: JSX.Element;
  inStock: boolean;
};

const OutOfStock = ({ children, inStock }: OutOfStockProps) => {
  const opacityStyle = !inStock ? { opacity: '0.4' } : { opacity: '1' };
  return (
    <div className={style.Box} style={opacityStyle}>
      {children}
      {!inStock ? <div className={style.OutOfStock}>Out of Stock</div> : ''}
    </div>
  );
};

export default OutOfStock;
