import { atom } from 'recoil';
const localStorageEffect =
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
});
export const currencyIDA = atom({
  key: 'currencyID',
  default: 0,
});
export const CartA = atom({
  key: 'Cart',
  default: [],
  effects: [localStorageEffect('current_user')],
});
