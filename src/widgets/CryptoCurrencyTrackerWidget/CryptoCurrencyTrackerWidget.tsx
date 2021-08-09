import React, { ChangeEvent, useState, useEffect } from 'react';
import axios from 'axios';
import { CryptoCurrencyTrackerWidgetResponse } from 'interfaces';
import { CryptoCurrencyTrackerWidgetSearchBar, CryptoCurrencyTrackerWidgetInfo } from 'components';
import { Card } from '@material-ui/core';
import styles from './CryptoCurrencyTrackerWidget.module.scss';

export const CryptoCurrencyTrackerWidget: React.FC = () => {
  const [coinsRes, setCoinsRes] = useState<Array<CryptoCurrencyTrackerWidgetResponse>>([]);
  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    function filterCoins(coinsRes: CryptoCurrencyTrackerWidgetResponse[]) {
      return coinsRes.filter((coin) => {
        return coin.name.toLowerCase().includes(search.toLowerCase());
      });
    }
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=8&page=1&sparkline=false',
      )
      .then((res) => {
        setCoinsRes(filterCoins(res.data));
      })
      .catch((err) => console.log(err));
  }, [search]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <Card className={styles.coinApp}>
      <h3>Crypto Tracker</h3>
      <CryptoCurrencyTrackerWidgetSearchBar type='text' placeholder='Search' onChange={handleChange} />
      <CryptoCurrencyTrackerWidgetInfo coins={coinsRes} />
    </Card>
  );
};
