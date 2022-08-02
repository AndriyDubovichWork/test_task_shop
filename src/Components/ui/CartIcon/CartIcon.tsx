import { NavLink } from 'react-router-dom';
import EmpetyCart from './../../../assets/imgs/Empty-Cart.svg';
import style from './CartIcon.module.scss';

import {
  bindMenu,
  bindTrigger,
  usePopupState,
} from 'material-ui-popup-state/hooks';

import Menu from '@mui/material/Menu';
import ContainedButton from '../ContainedButton/ContainedButton';
import OutlinedButton from '../OutlinedButton/OutlinedButton';

const CartIcon = () => {
  const popupState = usePopupState({
    variant: 'dialog',
    popupId: 'SmallCart',
  });

  return (
    <>
      <div {...bindTrigger(popupState)}>
        <img src={EmpetyCart} alt='empety cart' className={style.EmptyCart} />
      </div>
      <Menu {...bindMenu(popupState)}>
        <div className={style.Menu}>
          <NavLink to='/cart' style={{ textDecoration: 'none' }}>
            <OutlinedButton sx={{ marginRigth: '10px' }}>
              VIEW BAG
            </OutlinedButton>
          </NavLink>
          <NavLink to='/payment' style={{ textDecoration: 'none' }}>
            <ContainedButton>ORDER</ContainedButton>
          </NavLink>
        </div>
      </Menu>
    </>
  );
};

export default CartIcon;
