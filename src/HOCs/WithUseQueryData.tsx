import React from 'react';
type withUseQueryDataType = {
  response: { loading: boolean; error: any; data: any };
  children: any;
};
const WithUseQueryData = ({
  response: { loading, error, data },
  children,
}: withUseQueryDataType) => {
  if (loading) return <p>Loading...</p>;
  if (error) return <p>error</p>;
  if (children) return <>{children}</>;
  return <>some error</>;
};

export default WithUseQueryData;
