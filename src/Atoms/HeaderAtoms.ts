import { atom } from 'recoil';

export const currencyA = atom({
  key: 'currency',
  default: { __typename: 'Currency', label: 'USD', symbol: '$' },
});
