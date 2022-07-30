import React from 'react';
import { CartA } from '../../Atoms/Atoms';

import { useRecoilValue, useSetRecoilState } from 'recoil';
import { ProductType } from '../Category/Category/Category';
import { decrease, increase } from './../../helpers/ChangeCartObjQantity';

export type CartObjType = ProductType & { quantity: number };

const Cart = () => {
  const CartArray: CartObjType[] = useRecoilValue(CartA);
  const setCart = useSetRecoilState(CartA);

  return (
    <div>
      {CartArray.map((CartObj: CartObjType) => {
        return (
          <div key={CartObj.name}>
            {CartObj.name} quantity:{CartObj.quantity}
            <img src={CartObj.gallery[0]} alt={CartObj.name} />
            <button
              onClick={() => {
                increase(CartObj, CartArray, setCart);
              }}
            >
              +
            </button>
            <button
              onClick={() => {
                decrease(CartObj, CartArray, setCart);
              }}
            >
              -
            </button>
          </div>
        );
      })}
      {CartArray.length === 0 ? 'Cart Empty' : ''}

      <button onClick={() => setCart([])}>dev clean cart</button>
    </div>
  );
};

export default Cart;
