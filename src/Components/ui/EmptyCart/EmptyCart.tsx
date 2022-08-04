import React from 'react';
import style from './EmptyCart.module.scss';
const EmptyCart = () => {
  return (
    <div className={style.Wrapper}>
      <h1 className={style.Text}>Cart is Empty 😢</h1>
    </div>
  );
};

export default EmptyCart;
