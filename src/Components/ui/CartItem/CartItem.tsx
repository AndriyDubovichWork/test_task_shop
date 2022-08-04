import React, { useEffect } from 'react';
import { Grid } from '@mui/material';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { decrease, increase } from '../../../helpers/ChangeCartObjQantity';
import { CartObjType } from '../../../Pages/Cart/Cart';
import OutlinedButton from '../OutlinedButton/OutlinedButton';
import { CartA, currencyIDA, TotalCartInfoA } from './../../../Atoms/Atoms';
import style from './CartItem.module.scss';
import UpdateTotalCartInfo from '../../../helpers/UpdateTotalCartInfo';
import AtributeGroup from './../AtributeGroup/AtributeGroup';
import ImagesGallery from './../ImagesGallery/ImagesGallery';
type CartItemProps = {
  CartObj: CartObjType;
};

const CartItem = ({ CartObj }: CartItemProps) => {
  const CartArray: CartObjType[] = useRecoilValue(CartA);
  const CurrencyId: number = useRecoilValue(currencyIDA);
  const setCart = useSetRecoilState(CartA);
  const setTotalCartInfo = useSetRecoilState(TotalCartInfoA);
  useEffect(() => {
    UpdateTotalCartInfo(setTotalCartInfo, CurrencyId, CartArray);
  }, [CartObj, setTotalCartInfo, CurrencyId, CartArray]);

  return (
    <Grid container className={style.CartItem}>
      <Grid item xs={6}>
        <h2 className={style.Brand}>{CartObj.brand}</h2>
        <h2 className={style.Name}>{CartObj.name}</h2>
        <h2 className={style.Price}>
          {CartObj.prices[CurrencyId].currency.symbol +
            CartObj.prices[CurrencyId].amount}
        </h2>
        <AtributeGroup CartObj={CartObj} />
      </Grid>
      <Grid item xs={6}>
        <Grid container className={style.QantityAndImageBox}>
          <Grid item xs={2} className={style.QuantityBox}>
            <OutlinedButton
              sx={{ display: 'flex', margin: '10% auto' }}
              onClick={() => {
                increase(CartObj, CartArray, setCart);
              }}
            >
              +
            </OutlinedButton>
            <h1 className={style.Quantity}>{CartObj.quantity}</h1>
            <OutlinedButton
              sx={{
                position: 'absolute',
                bottom: '0',
                left: '50%',
                transform: 'translate(-50%,-10%)',
              }}
              onClick={() => {
                decrease(CartObj, CartArray, setCart);
              }}
            >
              -
            </OutlinedButton>
          </Grid>
          <Grid item xs={10}>
            <ImagesGallery CartObj={CartObj} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CartItem;
