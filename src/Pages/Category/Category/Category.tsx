import React from 'react';
// import style from './Category.module.scss';
import { useQuery } from '@apollo/client';
// @ts-ignore
import WithUseQueryData from '../../../HOCs/WithUseQueryData';

import { Currency } from '../../../Components/form/CurrencySelector';
import { GET_CATEGORY_DATA } from '../../../Requests/graphQlRequests';

import { useRecoilValue } from 'recoil';

import { currencyIDA } from '../../../Atoms/Atoms';
import Product from '../../../Components/ui/Product/Product';
import { Grid } from '@mui/material';

type CategoryPropsType = {
  category: string | null;
};

export type attributeItemType = {
  displayValue: string;
  value: string;
  id: string;
};

export type atributesType = {
  name: string;
  id: string;
  items: attributeItemType[];
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
  attributes: atributesType[];
};

const Category = ({ category }: CategoryPropsType) => {
  const { loading, error, data } = useQuery(
    GET_CATEGORY_DATA(category || 'all')
  );
  const CurrencyId = useRecoilValue(currencyIDA);

  return (
    <WithUseQueryData response={{ loading, error, data }}>
      <Grid
        container
        spacing={2}
        display='flex'
        justifyContent='center'
        alignItems='center'
      >
        {data?.category.products.map((product: ProductType) => {
          return (
            <Grid item key={product.id}>
              <Product product={product} CurrencyId={CurrencyId} />
            </Grid>
          );
        })}
      </Grid>
    </WithUseQueryData>
  );
};

export default Category;
