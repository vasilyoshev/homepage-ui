import React from 'react';
import { CryptoCurrencyTrackerWidgetInfoProps } from 'interfaces';
import { Card } from '@material-ui/core';
import styles from './CryptoCurrencyTrackerWidgetInfo.module.scss';

export const CryptoCurrencyTrackerWidgetInfo: React.FC<CryptoCurrencyTrackerWidgetInfoProps> = ({ coins }) => {
  return (
    <>
      {!!coins.length && coins.map((coin) => (
        <Card className={styles.coinCard} key={coin.id}>
          <div className={styles.coinName}>
            {coin.name}
            <img
              className={styles.icon}
              src={coin.image}
              alt="crypto" />
          </div>
          <div className={styles.coinPrice}>Price: ${coin.current_price.toFixed(2)}</div>
          <div className={styles.coinMarketcap}>Market Cap: ${coin.market_cap.toFixed(2)}</div>
          <div className={styles.coinPriceChange}>
              Price change 24h:
            {coin.price_change_percentage_24h < 0 ? (
              <p className={styles.coinPercentRed}>{coin.price_change_percentage_24h.toFixed(2)}%</p>
            ) : (
              <p className={styles.coinPercentGreen}>+{coin.price_change_percentage_24h.toFixed(2)}%</p>
            )}
          </div>
        </Card>
      ))}
    </>
  );
};
