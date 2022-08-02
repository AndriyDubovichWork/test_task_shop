import React from 'react';
import style from './Category.module.scss';
import { useSearchParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_CATEGORIES } from '../../Requests/graphQlRequests';
// @ts-ignore
import WithUseQueryData from '../../HOCs/WithUseQueryData';
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
      <h2 className={style.CategoryName}>{category}</h2>
      <Category category={category} />
    </WithUseQueryData>
  );
};

export default CategoryContainer;
