import React from 'react';
import { Button } from '@mui/material';

import style from './ContainedButton.module.scss';
type ContainedButtonProps = {
  children: JSX.Element | string;
  onClick?: any;
  sx?: any;
  disabled?: boolean;
};

const ContainedButton = ({
  children,
  onClick,
  sx,
  disabled,
}: ContainedButtonProps) => {
  return (
    <Button
      disabled={disabled}
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
