import React, { ChangeEvent, useState, useEffect } from 'react';
import axios from 'axios';
import { useMediaQuery } from '@material-ui/core';
import { CryptoCurrencyTrackerWidgetResponse } from 'interfaces';
import { CryptoCurrencySearchBar, CryptoCurrencyTable, CryptoCurrencyTableMobile } from 'components';
import styles from './CryptoCurrencyTrackerWidget.module.scss';

export const CryptoCurrencyTrackerWidget: React.FC = () => {
  const [coinsRes, setCoinsRes] = useState<Array<CryptoCurrencyTrackerWidgetResponse>>([]);
  const [search, setSearch] = useState<string>('');
  const isMobile = useMediaQuery('(max-width:600px)');

  useEffect(() => {
    function filterCoins(coinsRes: CryptoCurrencyTrackerWidgetResponse[]) {
      return coinsRes.filter((coin) => {
        return coin.name.toLowerCase().includes(search.toLowerCase());
      });
    }
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=3&page=1&sparkline=false',
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
    <div className={styles.coinApp}>
      <CryptoCurrencySearchBar type='text' placeholder='Search' onChange={handleChange} />
      {isMobile ? <CryptoCurrencyTableMobile coins={coinsRes} /> : <CryptoCurrencyTable coins={coinsRes} />}
    </div>
  );
};
