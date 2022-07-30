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
      category(input: { title: "${CategoryName}" }) {
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
export const GET_PRODUCT_DATA = (ProductID: string) => {
  return gql`   
query{
  product(id:"${ProductID}"){
    id
    name
    gallery
    inStock
    description
    category
    attributes{
      name
      id
      items{
        displayValue
        value
        id
      }
    }
    prices{
      currency{
        label
        symbol
      }
      amount
    }
    brand

  }
 
}
  `;
};
