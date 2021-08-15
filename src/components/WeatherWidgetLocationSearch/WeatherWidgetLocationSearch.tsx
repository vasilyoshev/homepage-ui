import React, { useState, ChangeEvent } from 'react';
import { WeatherWidgetLocationSearchProps } from 'interfaces';
import { TextField, Button, FormGroup } from '@material-ui/core/';

export const WeatherWidgetLocationSearch: React.FC<WeatherWidgetLocationSearchProps> = ({ onSearch }) => {
  const [locationSearch, setLocationSearch] = useState('');
  const disableSearch = locationSearch.trim() === '';
  const addLocation = () => {
    onSearch(locationSearch);
    setLocationSearch('');
  };
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => setLocationSearch(e.target.value);

  return (
    <>
      <FormGroup>
        <TextField
          variant="outlined"
          margin='normal'
          size="small"
          placeholder="add location here"
          value={locationSearch}
          onChange={handleInput} />
        <Button
          variant="contained"
          type="submit"
          size="medium"
          color="primary"
          onClick={addLocation}
          disabled={disableSearch}>
            Search
        </Button>
      </FormGroup>
    </>
  );
};
