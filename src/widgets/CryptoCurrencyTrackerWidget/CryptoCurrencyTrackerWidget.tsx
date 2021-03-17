import React, { ChangeEvent, useState, useEffect } from 'react';
import axios from 'axios';
import { CryptoCurrencyTrackerWidgetResProps } from 'interfaces';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableHead from '@material-ui/core/TableHead';
import styles from './CryptoCurrencyTrackerWidget.module.scss';

export const CryptoCurrencyTrackerWidget: React.FC = () => {
  const [coinsRes, setCoinsRes] = useState<Array<CryptoCurrencyTrackerWidgetResProps>>([]);
  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    function filterCoins(coinsRes: CryptoCurrencyTrackerWidgetResProps[]) {
      return coinsRes.filter((coin) => {
        return coin.name
          .toLowerCase()
          .includes(search.toLowerCase());
      });
    }
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=5&page=1&sparkline=false')
      .then((res) => {
        setCoinsRes(filterCoins(res.data));        
      })
      .catch((err) => console.log(err));

  },[search]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  
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
      <TableContainer component={Paper}>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Logo</TableCell>
              <TableCell>Symbol</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Price change in 24h</TableCell>
              <TableCell>Market capitalization</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {coinsRes.map((coin) => {
              return (
                <TableRow key={coin.id}>
                  <TableCell className={styles.coinName}>{coin.name}</TableCell>
                  <TableCell>
                    <img
                      className={styles.icon}
                      src={coin.image}
                      alt="crypto"
                    />
                  </TableCell>
                  <TableCell>{coin.symbol.toUpperCase()}</TableCell>
                  <TableCell>${coin.current_price.toFixed(2)}</TableCell>
                  {coin.price_change_percentage_24h < 0 ? (
                    <TableCell className={styles.coinPercentRed}>
                      {coin.price_change_percentage_24h.toFixed(2)}%
                    </TableCell>
                  ) : (
                    <TableCell className={styles.coinPercentGreen}>
                      {coin.price_change_percentage_24h.toFixed(2)}%
                    </TableCell>
                  )}
                  <TableCell>${coin.market_cap.toLocaleString()}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
