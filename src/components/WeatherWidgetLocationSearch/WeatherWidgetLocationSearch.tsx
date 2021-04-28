import React, { useState, ChangeEvent } from 'react';
import { WeatherWidgetLocationSearchProps } from 'interfaces';
import { TextField, Button } from '@material-ui/core/';

export const WeatherWidgetLocationSearch: React.FC<WeatherWidgetLocationSearchProps> = ({ onSearch }) => {
  const [locationSearch, setLocationSearch] = useState('');
  const disableSearch = locationSearch.trim() === '';

  const addLocation = () => {
    onSearch(locationSearch);
    setLocationSearch('');
  };

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => setLocationSearch(e.target.value);

  return (
    <section>
      <label>
        <TextField
          variant="outlined"
          size="small"
          placeholder="add location here"
          value={locationSearch}
          onChange={handleInput} />
      </label>
      <Button
        variant="outlined"
        size="medium"
        color="primary"
        onClick={addLocation}
        disabled={disableSearch}>Search</Button>
    </section>
  );
};
