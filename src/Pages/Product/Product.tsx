import { useQuery } from '@apollo/client';
import { useSearchParams } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { CartA, currencyIDA } from '../../Atoms/Atoms';
import addToCart from '../../helpers/AddToCart';
import { GET_PRODUCT_DATA } from '../../Requests/graphQlRequests';
import WithUseQueryData from './../../HOCs/WithUseQueryData';

const Product = () => {
  let [searchParams] = useSearchParams();
  let id = searchParams.get('id');
  const { loading, error, data } = useQuery(GET_PRODUCT_DATA(id || ''));

  const CurrencyId = useRecoilValue(currencyIDA);
  const Cart = useRecoilValue(CartA);
  const setCart = useSetRecoilState(CartA);
  return (
    <WithUseQueryData response={{ loading, error, data }}>
      <h2>{data?.product.name}</h2>{' '}
      <h3>
        {data?.product.prices[CurrencyId].amount}
        {data?.product.prices[CurrencyId].currency.symbol}
      </h3>
      {data?.product.gallery.map((img: string) => {
        return (
          <img
            key={img}
            src={img}
            alt={data?.product.name}
            style={{ width: '200px', height: '200px' }}
          />
        );
      })}
      <button onClick={() => addToCart(data?.product, setCart, Cart)}>
        add to cart
      </button>
    </WithUseQueryData>
  );
};

export default Product;
