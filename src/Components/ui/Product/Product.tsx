import React from 'react';
import { ProductType } from '../../../Pages/Category/Category/Category';
import { NavLink } from 'react-router-dom';
type ProductProps = {
  product: ProductType;
  CurrencyId: number;
};

const Product = ({ product, CurrencyId }: ProductProps) => {
  return (
    <>
      <NavLink
        key={product.id}
        to={'products/?id=' + product.id}
        style={{ color: '#000', textDecoration: 'none' }}
      >
        <img
          src={product.gallery[0]}
          alt={product.name}
          style={{ width: '300px', height: '300px', objectFit: 'cover' }}
        />
      </NavLink>

      <h3>{product.name}</h3>
      <p>
        {product.prices[CurrencyId].currency.symbol}
        {product.prices[CurrencyId].amount}
      </p>
      <h1>{product.id}</h1>
    </>
  );
};

export default Product;
