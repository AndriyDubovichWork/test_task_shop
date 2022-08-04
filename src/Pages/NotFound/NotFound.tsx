import React from 'react';
import style from './NotFound.module.scss';
const NotFound = () => {
  return (
    <div className={style.Container}>
      <h1 className={style.NotFound}>Page not found</h1>
    </div>
  );
};

export default NotFound;
