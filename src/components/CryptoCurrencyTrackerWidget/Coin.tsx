import React from 'react';
import { CoinProps } from 'interfaces';
import styles from './Coin.module.scss';

export const Coin: React.FC<CoinProps> = ({ name, image, symbol, marketcap, price, priceChange }) => {
  return (
    <div className={styles.coinContainer}>
      <div className={styles.coinRow}>
        <div className={styles.coin}>
          <img src={image} alt='crypto' />
          <h1>{name}</h1>
          <p className={styles.coinSymbol}>{symbol}</p> 
        </div>
        <div className={styles.coinData}>
          <p className={styles.coinPrice}>${price.toFixed(2)}</p>       
          {priceChange < 0 ? (
            <p className={styles.coinPercentRed}>{priceChange.toFixed(2)}%</p>
          ) : (
            <p className={styles.coinPercentGreen}>{priceChange.toFixed(2)}%</p>
          )
          }
          <p className={styles.coinMarketcap}>
               Mtk Cap: ${marketcap.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};
