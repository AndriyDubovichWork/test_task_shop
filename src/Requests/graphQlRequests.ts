import { gql } from '@apollo/client';

export const GET_HEADER_DATA = gql`
  query {
    currencies {
      label
      symbol
    }
    categories {
      name
    }
  }
`;

export const GET_CATEGORIES = gql`
  query {
    categories {
      name
    }
  }
`;

export const GET_CATEGORY_DATA = (CategoryName: string) => {
  return gql`
    query {
      category(input: { title:${CategoryName} }) {
        products {
          name
          inStock
          id
          gallery
          description
          prices {
            amount
            currency {
              symbol
            }
          }
        }
      }
    }
  `;
};
