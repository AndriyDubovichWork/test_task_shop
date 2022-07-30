import React from 'react';
// import style from './Category.module.scss';
import { useQuery } from '@apollo/client';
// @ts-ignore
import WithUseQueryData from '../../../HOCs/WithUseQueryData';

import { Currency } from '../../../Components/form/CurrencySelector';
import GetCurrencyId from '../../../helpers/GetCurrencyId';
import { GET_CATEGORY_DATA } from '../../../Requests/graphQlRequests';

import { useRecoilValue } from 'recoil';

import { currencyIDA } from '../../../Atoms/Atoms';
import Product from '../../../Components/ui/Product/Product';

type CategoryPropsType = {
  category: string | null;
};
export type ProductType = {
  id: string;
  name: string;
  inStock: boolean;
  gallery: string[];
  description: string;
  category: string;

  prices: { amount: number; currency: Currency }[];
  brand: string;
};

const Category = ({ category }: CategoryPropsType) => {
  const { loading, error, data } = useQuery(
    GET_CATEGORY_DATA(category || 'all')
  );
  const CurrencyId = useRecoilValue(currencyIDA);

  return (
    <WithUseQueryData response={{ loading, error, data }}>
      {data?.category.products.map((product: ProductType) => {
        return (
          <Product key={product.id} product={product} CurrencyId={CurrencyId} />
        );
      })}
    </WithUseQueryData>
  );
};

export default Category;
