import React from 'react';
import { CryptoCurrencyTrackerWidgetSearchBarProps } from 'interfaces';
import { FormGroup, TextField } from '@material-ui/core/';
import styles from './CryptoCurrencyTrackerWidgetSearchBar.module.scss';

export const CryptoCurrencyTrackerWidgetSearchBar: React.FC<CryptoCurrencyTrackerWidgetSearchBarProps> = ({ onChange }) => {
  return (
    <div className={styles.coinSearch}>
      <FormGroup>
        <TextField
          variant="outlined"
          size='small'
          type="text"
          placeholder='search...'
          onChange={onChange} />
      </FormGroup>
    </div>
  );
};
