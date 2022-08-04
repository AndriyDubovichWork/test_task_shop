import { useQuery } from '@apollo/client';
import { useSearchParams } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { CartA, currencyIDA } from '../../Atoms/Atoms';
import addToCart from '../../helpers/AddToCart';
import { GET_PRODUCT_DATA } from '../../Requests/graphQlRequests';
import WithUseQueryData from './../../HOCs/WithUseQueryData';

import ImagesGallery from './../../Components/ui/ImagesGallery/ImagesGallery';
import { Grid } from '@mui/material';
import style from './Product.module.scss';
import AtributeGroup from './../../Components/ui/AtributeGroup/AtributeGroup';
import ContainedButton from './../../Components/ui/ContainedButton/ContainedButton';
const Product = () => {
  let [searchParams] = useSearchParams();
  let id = searchParams.get('id');
  const { loading, error, data } = useQuery(GET_PRODUCT_DATA(id || ''));

  const CurrencyId = useRecoilValue(currencyIDA);
  const Cart = useRecoilValue(CartA);
  const setCart = useSetRecoilState(CartA);

  return (
    <WithUseQueryData response={{ loading, error, data }}>
      <Grid container>
        <Grid item xs={12} md={6} lg={6}>
          <ImagesGallery CartObj={data?.product} />
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <h2 className={style.Brand}>{data?.product.brand}</h2>
          <h2 className={style.Name}>{data?.product.name}</h2>
          <AtributeGroup CartObj={data?.product} />
          <h3 className={style.PriceDescribe}>Price:</h3>
          <h3 className={style.Price}>
            {data?.product.prices[CurrencyId].amount}
            {data?.product.prices[CurrencyId].currency.symbol}
          </h3>

          <ContainedButton
            disabled={!data?.product.inStock}
            sx={{ padding: '10px 20px' }}
            onClick={() => {
              addToCart(data?.product, setCart, Cart);
            }}
          >
            add to cart
          </ContainedButton>
          <h2 className={style.Description}>{data?.product.description}</h2>
        </Grid>
      </Grid>
    </WithUseQueryData>
  );
};

export default Product;
