import React, { useState, ChangeEvent } from 'react';
import { WeatherWidgetLocationSearchProps } from 'interfaces';

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
        Add Location
        <input type="text" value={locationSearch} onChange={handleInput}/>
      </label>
      <button onClick={addLocation} disabled={disableSearch}>Search</button>
    </section>
  );
};
