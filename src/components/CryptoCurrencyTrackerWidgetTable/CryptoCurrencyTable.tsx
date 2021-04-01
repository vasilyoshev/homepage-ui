import React from 'react';
import { Table, TableHead, TableBody, TableCell, TableContainer, TableRow, Paper } from '@material-ui/core';
import { CryptoCurrencyTableProps } from 'interfaces';
import styles from './CryptoCurrencyTable.module.scss';

export const CryptoCurrencyTable: React.FC<CryptoCurrencyTableProps> = ({ coins }) => {
  return (
    <>
      {!!coins.length && (
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
              {coins.map((coin) => {
                return (
                  <TableRow key={coin.id}>
                    <TableCell className={styles.coinName}>{coin.name}</TableCell>
                    <TableCell>
                      <img className={styles.icon} src={coin.image} alt="crypto" />
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
      )}
    </>
  );
};
