import { CartObjType } from '../Pages/Cart/Cart';

const UpdateTotalCartInfo = (
  setTotalCartInfo: any,
  currencyID: any,
  Cart: any
) => {
  let TotalInfo = { quantity: 0, sum: 0 };

  Cart.forEach((CartObj: CartObjType) => {
    if (CartObj) {
      TotalInfo.quantity += CartObj.quantity;
      TotalInfo.sum += CartObj.prices[currencyID].amount * TotalInfo.quantity;
    }
  });
  setTotalCartInfo(TotalInfo);
};

export default UpdateTotalCartInfo;
