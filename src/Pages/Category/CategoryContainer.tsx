import React, { useEffect } from 'react';
// import style from './Category.module.scss';
import { useSearchParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_CATEGORIES } from '../../Requests/graphQlRequests';
// @ts-ignore
import WithUseQueryData from '../../HOCs/WithUseQueryData';
import { GET_CATEGORY_DATA } from '../../Requests/graphQlRequests';
import Category from './Category/Category';

const CategoryContainer = () => {
  let [searchParams] = useSearchParams();
  let category = searchParams.get('category');

  const { loading, error, data } = useQuery(GET_CATEGORIES);

  const correctCategory = data?.categories.some(
    (categoryOBJ: { __typename: string; name: string }) => {
      return categoryOBJ.name === category;
    }
  );

  if (!correctCategory) {
    category = data?.categories[0].name;
  }

  return (
    <WithUseQueryData response={{ loading, error, data }}>
      <p>{category}</p>
      <Category category={category} />
    </WithUseQueryData>
  );
};

export default CategoryContainer;
