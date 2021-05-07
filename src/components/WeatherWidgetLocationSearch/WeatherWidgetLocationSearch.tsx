import React, { useState, ChangeEvent } from 'react';
import { WeatherWidgetLocationSearchProps } from 'interfaces';
import { TextField, Button, Card, CardContent, CardActions } from '@material-ui/core/';
import styles from './WeatherWidgetLocationSearch.module.scss';

export const WeatherWidgetLocationSearch: React.FC<WeatherWidgetLocationSearchProps> = ({ onSearch }) => {
  const [locationSearch, setLocationSearch] = useState('');
  const disableSearch = locationSearch.trim() === '';

  const addLocation = () => {
    onSearch(locationSearch);
    setLocationSearch('');
  };

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => setLocationSearch(e.target.value);

  return (
    <Card className={styles.searchContainer}>
      <CardContent>
        <TextField
          variant="outlined"
          size="small"
          placeholder="add location here"
          value={locationSearch}
          onChange={handleInput} />
        <CardActions>
          <Button
            variant="outlined"
            size="medium"
            color="primary"
            onClick={addLocation}
            disabled={disableSearch}>Search</Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};
