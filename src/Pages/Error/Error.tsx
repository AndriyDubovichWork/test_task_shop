import React from 'react';
import style from './Error.module.scss';
const Error = ({ error }: { error: Error }) => {
  return <h1 className={style.Error}>{error.message} try to reload</h1>;
};

export default Error;
