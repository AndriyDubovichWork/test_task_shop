import { Currency } from '../Components/form/CurrencySelector';

type SpecialCurrency = { symbol: string };
type PriceArr = { currency: SpecialCurrency }[];

const GetCurrencyId = (ProductsArr: any, CurrencySymbol: string) => {
  let ID = 0;
  if (ProductsArr) {
    ProductsArr.map(({ prices }: any) => {
      return prices.map((currency: any, indx: number) => {
        if (currency.currency.symbol === CurrencySymbol) {
          ID = indx;
        }
      });
    });
  }
  return ID;
};

export default GetCurrencyId;
