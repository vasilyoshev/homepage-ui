import React, {ChangeEvent, useState, useEffect} from 'react';
import axios from 'axios';
import { Coin } from 'components';
import { CryptoCurrencyTrackerRes } from 'interfaces';
import styles from './CryptoCurrencyTracker.module.scss';

export const CryptoCurrencyTracker: React.FC = () => {
  const [coinsRes, setCoinsRes] = useState<Array<CryptoCurrencyTrackerRes>>([]);
  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=5&page=1&sparkline=false')
      .then((res) => {
        setCoinsRes(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  },[]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coinsRes.filter((coin: CryptoCurrencyTrackerRes) => {
    return coin.name
      .toLowerCase()
      .includes(search.toLowerCase());
  });
  
  return (
    <div className={styles.coinApp}>
      <div className={styles.coinSearch}>
        <h1 className={styles.coinText}>Search a currency</h1>
        <form>
          <input 
            type='text'
            placeholder='Search' 
            className={styles.coinInput} 
            onChange={handleChange}
          />
        </form>
      </div> 
      {filteredCoins.map((coin) => {
        return ( 
          <Coin
            key={coin.id}
            name={coin.name} 
            image={coin.image}
            symbol={coin.symbol}
            marketcap={coin.market_cap}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            volume={coin.total_volume}
          />
        );
      })}
    </div>
  );
};
