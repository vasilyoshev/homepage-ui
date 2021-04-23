import React, {useState} from 'react';
import { WeatherWidgetLocationSearch, WeatherWidgetLocationTable } from 'components';

export const WeatherWidget: React.FC = () => {
  const [locations, setLocations] = useState<string[]>([]);
  const addLocation = (location: string) => setLocations([location, ...locations]);

  return (
    <main>
      <h1>Weather Widget</h1>
      <WeatherWidgetLocationSearch onSearch={addLocation} />
      <WeatherWidgetLocationTable locations={locations} />
    </main>
  );
};
