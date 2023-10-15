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
        <CategoryLinks data={data} />
        <NavLink to='/test_task_shop/?category=all' className={style.logo}>
          <img src={logo} alt='logo' />
        </NavLink>
        <div className={style.CartAndCurrency}>
          <CurrencySelector data={data} />
          <CartPopUp />
        </div>
      </WithUseQueryData>
    </div>
  );
};

export default Header;
