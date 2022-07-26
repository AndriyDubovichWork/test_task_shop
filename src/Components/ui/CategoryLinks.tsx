import React from 'react';
import { NavLink } from 'react-router-dom';

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
  return (
    <>
      {props.data?.categories.map((category: CategoryType) => {
        return (
          <NavLink key={category.name} to={'/?category=' + category.name}>
            {category.name}
          </NavLink>
        );
      })}
    </>
  );
};

export default CategoryLinks;
