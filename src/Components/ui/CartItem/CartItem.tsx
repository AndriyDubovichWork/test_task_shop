import { RadioGroup } from '@mui/material';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { decrease, increase } from '../../../helpers/ChangeCartObjQantity';
import { CartObjType } from '../../../Pages/Cart/Cart';
import { atributesType } from '../../../Pages/Category/Category/Category';
import OutlinedButton from '../OutlinedButton/OutlinedButton';
import { CartA, currencyIDA } from './../../../Atoms/Atoms';
import AtributeItem from './../AtributeItem/AtributeItem';
import style from './CartItem.module.scss';

type CartItemProps = {
  CartObj: CartObjType;
};

const CartItem = ({ CartObj }: CartItemProps) => {
  const CartArray: CartObjType[] = useRecoilValue(CartA);
  const CurrencyId: number = useRecoilValue(currencyIDA);
  const setCart = useSetRecoilState(CartA);

  return (
    <div className={style.CartItem}>
      <div>
        <h2 className={style.Brand}>{CartObj.brand}</h2>
        <h2 className={style.Name}>{CartObj.name}</h2>
        <h2 className={style.Price}>
          {CartObj.prices[CurrencyId].currency.symbol +
            CartObj.prices[CurrencyId].amount}
        </h2>
        {CartObj.attributes.map((atribute: atributesType) => {
          return (
            <>
              <h1 className={style.AtributeName}>{atribute.name}:</h1>
              <RadioGroup
                row
                key={atribute.id}
                defaultValue={atribute.items[0].value}
              >
                <AtributeItem items={atribute.items} />
              </RadioGroup>
            </>
          );
        })}

        <OutlinedButton
          onClick={() => {
            increase(CartObj, CartArray, setCart);
          }}
        >
          +
        </OutlinedButton>
        <h1 className={style.Quantity}>{CartObj.quantity}</h1>
        <OutlinedButton
          onClick={() => {
            decrease(CartObj, CartArray, setCart);
          }}
        >
          -
        </OutlinedButton>
      </div>
      <img src={CartObj.gallery[0]} alt={CartObj.name} />
    </div>
  );
};

export default CartItem;
