import React from 'react';
import { NavLink, useSearchParams } from 'react-router-dom';
import style from './CategoryLinks.module.scss';
type CategoryType = {
  __typename: string;
  name: string;
};

type CategoryLinksType = {
  data?: {
    categories: CategoryType[];
  };
};

const CategoryLinks = (props: CategoryLinksType) => {
  let [searchParams] = useSearchParams();
  let categoryParam = searchParams.get('category');
  return (
    <>
      {props.data?.categories.map((category: CategoryType) => {
        return (
          <NavLink
            className={({ isActive }) => {
              return categoryParam === category.name
                ? style.Selected
                : style.Link;
            }}
            key={category.name}
            to={'/test_task_shop/?category=' + category.name}
          >
            {category.name}
          </NavLink>
        );
      })}
    </>
  );
};

export default CategoryLinks;
