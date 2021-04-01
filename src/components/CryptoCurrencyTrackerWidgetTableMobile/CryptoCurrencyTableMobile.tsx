import React from 'react';
import { Card, CardContent } from '@material-ui/core';
import { CryptoCurrencyTrackerWidgetResponseTableProps } from 'interfaces';
import styles from './CryptoCurrencyTableMobile.module.scss';

export const CryptoCurrencyTableMobile: React.FC<CryptoCurrencyTrackerWidgetResponseTableProps> = ({ coins }) => {
  return (
    <>
      {!!coins.length && coins.map((coin) => (
        <Card className={styles.card} key={coin.id}>
          <CardContent>
            <div className={styles.coinName}>
              {coin.name}
              <img
                className={styles.icon}
                src={coin.image}
                alt="crypto" />
            </div>
            <div>Symbol: {coin.symbol.toUpperCase()}</div>
            <div>
              Price: <p className={styles.coinPrice}>${coin.current_price.toFixed(2)}</p>
            </div>
            <div>Price change in last 24h:
              {coin.price_change_percentage_24h < 0 ? (
                <p className={styles.coinPercentRed}>-{coin.price_change_percentage_24h.toFixed(2)}%</p>
              ) : (
                <p className={styles.coinPercentGreen}>+{coin.price_change_percentage_24h.toFixed(2)}%</p>
              )}
            </div>
            <div>Market Cap: ${coin.market_cap.toFixed(2)}</div>
          </CardContent>
        </Card>
      ))}
    </>
  );
};
