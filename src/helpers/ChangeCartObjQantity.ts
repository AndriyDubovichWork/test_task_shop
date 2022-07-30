import { CartObjType } from '../Pages/Cart/Cart';

export const increase = (
  CartObj: CartObjType,
  CartArray: CartObjType[],
  setCart: any
) => {
  const ArrayCopy = JSON.parse(JSON.stringify(CartArray));
  ArrayCopy.map((InnerCartObj: CartObjType) => {
    if (InnerCartObj.id === CartObj.id) {
      InnerCartObj.quantity += 1;
      return CartObj;
    } else {
      return InnerCartObj;
    }
  });
  setCart(ArrayCopy);
};
export const decrease = (
  CartObj: CartObjType,
  CartArray: CartObjType[],
  setCart: any
) => {
  const ArrayCopy = JSON.parse(JSON.stringify(CartArray));
  let ObjectIdToRemove = null;
  ArrayCopy.forEach((InnerCartObj: CartObjType, id: number) => {
    if (InnerCartObj.id === CartObj.id) {
      if (InnerCartObj.quantity > 1) {
        InnerCartObj.quantity -= 1;
        return CartObj;
      } else {
        ObjectIdToRemove = id;
      }
    } else {
      return InnerCartObj;
    }
  });
  if (ObjectIdToRemove !== null) {
    ArrayCopy.splice(ObjectIdToRemove, 1);
  }
  setCart(ArrayCopy);
};
