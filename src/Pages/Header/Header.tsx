import { useQuery } from '@apollo/client';
import WithUseQueryData from '../../HOCs/WithUseQueryData';
import { GET_HEADER_DATA } from '../../Requests/graphQlRequests';
import logo from './../../assets/imgs/logo.svg';
import style from './Header.module.scss';

import { Grid } from '@mui/material';
import { NavLink } from 'react-router-dom';
import CategoryLinks from '../../Components/ui/CategoryLinks/CategoryLinks';
import CurrencySelector from './../../Components/form/CurrencySelector';
import CartPopUp from './../../Components/ui/CartPopUp/CartPopUp';

const Header = (props: any) => {
  const { loading, error, data } = useQuery(GET_HEADER_DATA);

  return (
    <div className={style.Header}>
      <WithUseQueryData response={{ loading, error, data }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <CategoryLinks data={data} />
          </Grid>
          <Grid item xs={4}>
            <NavLink to='/?category=all' className={style.logo}>
              <img src={logo} alt='logo' />
            </NavLink>
          </Grid>
          <Grid item xs={4} className={style.CartAndCurrency}>
            <CurrencySelector data={data} />
            <CartPopUp />
          </Grid>
        </Grid>
      </WithUseQueryData>
    </div>
  );
};

export default Header;
