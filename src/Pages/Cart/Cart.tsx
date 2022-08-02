import React from 'react';
import { CartA } from '../../Atoms/Atoms';

import { useRecoilValue, useSetRecoilState } from 'recoil';
import { ProductType } from '../Category/Category/Category';
import style from './Cart.module.scss';
import CartItem from '../../Components/ui/CartItem/CartItem';

export type CartObjType = ProductType & { quantity: number };

const Cart = () => {
  const CartArray: CartObjType[] = useRecoilValue(CartA);
  const setCart = useSetRecoilState(CartA);

  return (
    <div>
      <h1 className={style.CartText}>CART</h1>
      {CartArray.map((CartObj: CartObjType) => {
        return <CartItem CartObj={CartObj} key={CartObj.id} />;
      })}
      {CartArray.length === 0 ? 'Cart Empty' : ''}

      <button onClick={() => setCart([])}>dev clean cart</button>
    </div>
  );
};

export default Cart;
