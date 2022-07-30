import { useQuery } from '@apollo/client';
import WithUseQueryData from '../../HOCs/WithUseQueryData';
import { GET_HEADER_DATA } from '../../Requests/graphQlRequests';
import logo from './../../assets/imgs/logo.svg';
import EmpetyCart from './../../assets/imgs/Empty-Cart.svg';
import style from './Header.module.scss';

import CurrencySelector from './../../Components/form/CurrencySelector';
import CategoryLinks from '../../Components/ui/CategoryLinks/CategoryLinks';
import { NavLink } from 'react-router-dom';
import { Grid } from '@mui/material';

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
            <NavLink to='/'>
              <img src={logo} alt='logo' />
            </NavLink>
          </Grid>
          <Grid item xs={4}>
            <CurrencySelector data={data} />
            <NavLink to='/cart'>
              <img src={EmpetyCart} alt='empety cart' />
            </NavLink>
          </Grid>
        </Grid>
      </WithUseQueryData>
    </div>
  );
};

export default Header;
