import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { TotalCartInfoA, currencyA } from '../../Atoms/Atoms';
import { useRecoilValue } from 'recoil';
import style from './Payment.module.scss';
const Payment = () => {
  const TotalCartInfo = useRecoilValue(TotalCartInfoA);
  const Currency = useRecoilValue(currencyA);
  return (
    <div className={style.container}>
      <div className={style.Payment}>
        <PayPalScriptProvider
          options={{
            'client-id':
              'AWCIopeXaIohHvApxhjKWM6WGr97rkQA5BvHr-devBuM1bzqUTA_9OGfx4yjC2XriJEn0Iee2UftBhDW',
            currency: Currency.label,
          }}
        >
          <PayPalButtons
            disabled={TotalCartInfo.sum <= 0}
            style={{ layout: 'horizontal' }}
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: `${TotalCartInfo.sum}`,
                    },
                  },
                ],
              });
            }}
          />
        </PayPalScriptProvider>
      </div>
    </div>
  );
};

export default Payment;
