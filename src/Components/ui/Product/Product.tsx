import React from 'react';
import style from './Product.module.scss';
import { ProductType } from '../../../Pages/Category/Category/Category';
import { NavLink } from 'react-router-dom';
import OutOfStock from '../../../HOCs/OutOfStock/OutOfStock';
type ProductProps = {
  product: ProductType;
  CurrencyId: number;
};

const Product = ({ product, CurrencyId }: ProductProps) => {
  const opacityStyle = !product.inStock ? { opacity: '0.4' } : { opacity: '1' };
  return (
    <div style={opacityStyle} className={style.Box}>
      <NavLink
        to={'/test_task_shop/products/?id=' + product.id}
        className={style.Link}
      >
        <OutOfStock inStock={product.inStock}>
          <img src={product.gallery[0]} alt={product.name} />
        </OutOfStock>

        <p className={style.Name}>{product.name}</p>
        <strong className={style.Currency}>
          {product.prices[CurrencyId].currency.symbol}
          {product.prices[CurrencyId].amount}
        </strong>
      </NavLink>
    </div>
  );
};

export default Product;
