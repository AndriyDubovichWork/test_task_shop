import React from 'react';
import { CartA, currencyA, TotalCartInfoA } from '../../Atoms/Atoms';

import { useRecoilValue } from 'recoil';
import { ProductType } from '../Category/Category/Category';
import style from './Cart.module.scss';
import CartItem from '../../Components/ui/CartItem/CartItem';
import EmptyCart from '../../Components/ui/EmptyCart/EmptyCart';
import { NavLink } from 'react-router-dom';
import ContainedButton from './../../Components/ui/ContainedButton/ContainedButton';
import { Currency } from '../../Components/form/CurrencySelector';

export type CartObjType = ProductType & { quantity: number };

const Cart = () => {
  const currency: Currency = useRecoilValue(currencyA);
  const CartArray: CartObjType[] = useRecoilValue(CartA);
  const TotalCartInfo: { quantity: number; sum: number } =
    useRecoilValue(TotalCartInfoA);

  return (
    <div>
      <h1 className={style.CartText}>CART</h1>
      {CartArray.map((CartObj: CartObjType) => {
        return <CartItem CartObj={CartObj} key={CartObj.id} />;
      })}
      {CartArray.length === 0 ? (
        <EmptyCart />
      ) : (
        <>
          <div className={style.TotalInfoWrap}>
            <h2 className={style.TotalInfoDescribe}>Tax 5%:</h2>
            <h2 className={style.TotalInfoNumber}>
              {currency.symbol}
              {Math.round((TotalCartInfo.sum / 100) * 5)}
            </h2>
          </div>
          <div className={style.TotalInfoWrap}>
            <h2 className={style.TotalInfoDescribe}>Quantity:</h2>
            <h2 className={style.TotalInfoNumber}>{TotalCartInfo.quantity}</h2>
          </div>
          <div className={style.TotalInfoWrap}>
            <h2 className={style.TotalDescribe}>Total:</h2>
            <h2 className={style.TotalInfoNumber}>
              {currency.symbol}
              {Math.round(TotalCartInfo.sum)}
            </h2>
          </div>
          <NavLink to='/payment' style={{ textDecoration: 'none' }}>
            <ContainedButton>ORDER</ContainedButton>
          </NavLink>
        </>
      )}
    </div>
  );
};

export default Cart;
