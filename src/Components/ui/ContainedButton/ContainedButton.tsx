import React from 'react';
import { Button } from '@mui/material';

import style from './ContainedButton.module.scss';
type ContainedButtonProps = {
  children: JSX.Element | string;
  onClick?: any;
  sx?: any;
};

const ContainedButton = ({ children, onClick, sx }: ContainedButtonProps) => {
  return (
    <Button
      sx={sx}
      variant='contained'
      onClick={onClick}
      className={style.Button}
    >
      {children}
    </Button>
  );
};

export default ContainedButton;
