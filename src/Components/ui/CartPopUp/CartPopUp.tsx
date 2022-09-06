import React, { useEffect } from 'react';

import { NavLink } from 'react-router-dom';
import EmpetyCart from './../../../assets/imgs/Empty-Cart.svg';
import style from './CartPopUp.module.scss';

import {
  bindMenu,
  bindTrigger,
  usePopupState,
} from 'material-ui-popup-state/hooks';

import Menu from '@mui/material/Menu';
import ContainedButton from '../ContainedButton/ContainedButton';
import OutlinedButton from '../OutlinedButton/OutlinedButton';
import CartItem from '../CartItem/CartItem';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { CartA, currencyIDA, TotalCartInfoA } from '../../../Atoms/Atoms';
import { CartObjType } from '../../../Pages/Cart/Cart';
import EmptyCart from '../EmptyCart/EmptyCart';
import UpdateTotalCartInfo from '../../../helpers/UpdateTotalCartInfo';

const CartPopUp = () => {
  const popupState = usePopupState({
    variant: 'dialog',
    popupId: 'SmallCart',
  });
  const CartArray: CartObjType[] = useRecoilValue(CartA);
  const TotalCartInfo: { quantity: number; sum: number } =
    useRecoilValue(TotalCartInfoA);

  const setTotalCartInfo = useSetRecoilState(TotalCartInfoA);
  const currencyId = useRecoilValue(currencyIDA);
  useEffect(() => {
    UpdateTotalCartInfo(setTotalCartInfo, currencyId, CartArray);
  }, [CartArray, currencyId, setTotalCartInfo]);
  return (
    <>
      <div {...bindTrigger(popupState)} className={style.CartIconWrapper}>
        <img src={EmpetyCart} alt='empety cart' className={style.EmptyCart} />

        {TotalCartInfo.quantity >= 1 ? (
          <h2 className={style.Quantity}>{TotalCartInfo.quantity}</h2>
        ) : (
          ''
        )}
      </div>
      <Menu {...bindMenu(popupState)}>
        <div className={style.Menu}>
          {CartArray.length === 0 ? <EmptyCart /> : ''}
          <>
            {Array.isArray(CartArray) &&
              CartArray?.map((CartObj: CartObjType) => {
                return <CartItem CartObj={CartObj} key={CartObj.id} />;
              })}
          </>
          <NavLink
            to='/test_task_shop/cart'
            onClick={popupState.close}
            style={{ textDecoration: 'none', marginRight: '20px' }}
          >
            <OutlinedButton>VIEW CART</OutlinedButton>
          </NavLink>
          <NavLink
            onClick={popupState.close}
            to='/test_task_shop/payment'
            style={{ textDecoration: 'none' }}
          >
            <ContainedButton>ORDER</ContainedButton>
          </NavLink>
        </div>
      </Menu>
    </>
  );
};

export default CartPopUp;
