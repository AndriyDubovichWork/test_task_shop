import { Button } from '@mui/material';
import React from 'react';
import style from './OutlinedButton.module.scss';

type OutlinedButtonProps = {
  children: JSX.Element | string;
  onClick?: any;
  sx?: any;
};

const OutlinedButton = ({ children, onClick, sx }: OutlinedButtonProps) => {
  return (
    <Button
      sx={sx}
      variant='outlined'
      className={style.Button}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default OutlinedButton;
