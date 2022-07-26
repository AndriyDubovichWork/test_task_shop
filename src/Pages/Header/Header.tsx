import React, { useEffect } from 'react';
import style from './Header.module.scss';
import { useQuery } from '@apollo/client';
import { GET_HEADER_DATA } from '../../Requests/graphQlRequests';
import logo from './../../assets/imgs/logo.svg';
import WithUseQueryData from '../../HOCs/WithUseQueryData';
import { NavLink, useSearchParams } from 'react-router-dom';
import { MenuItem, Select } from '@mui/material';
import { Formik } from 'formik';
import { currencyA } from './../../Atoms/HeaderAtoms';

import CategoryLinks from './../../Components/ui/CategoryLinks';
import CurrencySelector from './../../Components/form/CurrencySelector';

const Header = (props: any) => {
  const { loading, error, data } = useQuery(GET_HEADER_DATA);

  return (
    <div className={style.Header}>
      <WithUseQueryData response={{ loading, error, data }}>
        <CategoryLinks data={data} />
        <img src={logo} alt='logo' />

        <CurrencySelector data={data} />
      </WithUseQueryData>
    </div>
  );
};

export default Header;
