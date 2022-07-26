import React, { useEffect } from 'react';
import { currencyA } from '../../Atoms/HeaderAtoms';

import { Select, MenuItem } from '@mui/material';
import { SetterOrUpdater, useRecoilValue, useSetRecoilState } from 'recoil';
import { useForm, Controller } from 'react-hook-form';
import { getFullCurencyObj } from './../../helpers/getFullCurencyObj';

export type Currency = {
  __typename: string;
  label: string;
  symbol: string;
};

type CurrencySelectorType = {
  data: {
    currencies: Currency[];
  };
};

const CurrencySelector = (props: CurrencySelectorType) => {
  const SelectedCurrency: Currency = useRecoilValue(currencyA);
  const setSelectedCurrency: SetterOrUpdater<Currency> =
    useSetRecoilState(currencyA);

  const { control } = useForm({
    mode: 'onChange',
  });
  useEffect(() => {
    console.log(SelectedCurrency);
  }, [SelectedCurrency]);
  return (
    <Controller
      control={control}
      name={'currency'}
      defaultValue={SelectedCurrency.symbol}
      render={({ field: { onChange, value } }) => {
        return (
          <Select
            onChange={(e) => {
              const fullCurrencyObj: Currency = getFullCurencyObj(
                e.target.value,
                props.data.currencies
              );
              setSelectedCurrency(fullCurrencyObj);
              onChange(e.target.value);
            }}
            value={value}
          >
            {props.data?.currencies.map((curency: Currency) => {
              return (
                <MenuItem key={curency.label} value={curency.symbol}>
                  {curency.symbol}
                </MenuItem>
              );
            })}
          </Select>
        );
      }}
    ></Controller>
  );
};

export default CurrencySelector;
