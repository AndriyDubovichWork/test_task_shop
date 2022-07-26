import { Currency } from '../Components/form/CurrencySelector';

export const getFullCurencyObj = (
  currencySymbol: string,
  currenciesArr: Currency[]
) => {
  let res: Currency = {
    __typename: 'Currency',
    symbol: currencySymbol,
    label: '',
  };

  currenciesArr.map((currencyObj: Currency) => {
    if (currencyObj.symbol === currencySymbol) {
      res = currencyObj;
    }
    return currencyObj;
  });
  return res;
};
