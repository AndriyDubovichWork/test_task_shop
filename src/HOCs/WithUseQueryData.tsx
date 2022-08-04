import React from 'react';
import loadingImg from './../assets/imgs/loading.svg';
import Error from './../Pages/Error/Error';
type withUseQueryDataType = {
  response: { loading: boolean; error: any; data: any };
  children: any;
};
const WithUseQueryData = ({
  response: { loading, error, data },
  children,
}: withUseQueryDataType) => {
  if (loading) return <img src={loadingImg} alt={'Loading...'} />;
  if (error) return <Error error={error} />;
  if (children) return <>{children}</>;
  return <>Server error</>;
};

export default WithUseQueryData;
