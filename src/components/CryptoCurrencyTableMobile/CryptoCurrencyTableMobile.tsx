import React from 'react';
import styles from './CryptoCurrencyTableMobile.module.scss';
import { Card, CardContent } from '@material-ui/core';

export const CryptoCurrencyTableMobile: React.FC<any> = ({ coins }: any) => {
  return (
    <>
      {!!coins.length && coins?.map((coin: any) => (
        <Card key={coin.id}>
          <CardContent>
            <div>{coin.name}</div>
            <div>{coin.image}</div>
            <div>{coin.symbol}</div>
            <div>{coin.market_cap}</div>
            <div>{coin.current_price}</div>
            <div>{coin.price_change_percentage_24h}</div>
          </CardContent>
        </Card>
      ))}
    </>
  );
};
