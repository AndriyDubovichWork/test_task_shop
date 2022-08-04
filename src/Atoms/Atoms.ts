import { atom } from 'recoil';
const localStorageEffect: any =
  (key: any) =>
  ({ setSelf, onSet }: any) => {
    const savedValue = localStorage.getItem(key);
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }

    onSet((newValue: any, _: any, isReset: any) => {
      isReset
        ? localStorage.removeItem(key)
        : localStorage.setItem(key, JSON.stringify(newValue));
    });
  };
export const currencyA = atom({
  key: 'currency',
  default: { __typename: 'Currency', label: 'USD', symbol: '$' },
  effects: [localStorageEffect('Currency')],
});
export const currencyIDA = atom({
  key: 'currencyID',
  default: 0,
  effects: [localStorageEffect('currencyID')],
});
export const CartA = atom({
  key: 'Cart',
  default: [],
  effects: [localStorageEffect('CurrentUser')],
});
export const TotalCartInfoA = atom({
  key: 'Total Cart Info',
  default: { quantity: 0, sum: 0 },
  effects: [localStorageEffect('TotalCartInfo')],
});
