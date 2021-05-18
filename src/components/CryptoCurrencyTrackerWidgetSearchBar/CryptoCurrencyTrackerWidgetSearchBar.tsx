import React from 'react';
import { CryptoCurrencyTrackerWidgetSearchBarProps } from 'interfaces';
import styles from './CryptoCurrencyTrackerWidgetSearchBar.module.scss';

export const CryptoCurrencyTrackerWidgetSearchBar: React.FC<CryptoCurrencyTrackerWidgetSearchBarProps> = ({ onChange }) => {
  return (
    <div className={styles.coinSearch}>
      <h1 className={styles.coinText}>Crypto currency</h1>
      <form>
        <input
          className={styles.coinInput}
          type="text"
          placeholder='search...'
          onChange={onChange} />
      </form>
    </div>
  );
};
