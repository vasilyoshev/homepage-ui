import React, {useState} from 'react';
import { WeatherWidgetLocationSearch, WeatherWidgetLocationTable, WeatherWidgetAlertMessage, WeatherWidgetSummary } from 'components';
import { Card, CardContent } from '@material-ui/core';
import { WeatherLocation } from 'interfaces';
import { searchLocation } from 'services';
import styles from './WeatherWidget.module.scss';

export const WeatherWidget: React.FC = () => {
  const [locations, setLocations] = useState<WeatherLocation[]>([]);
  const [currentLocation, setCurrentLocation] = useState<WeatherLocation>();
  const [error, setError] = useState('');
  const [warning, setWarning] = useState('');

  const resetAlerts = () => {
    setError('');
    setWarning('');
  };

  const addLocation = async (term: string) => {
    resetAlerts();
    const location = await searchLocation(term);

    if (!location) {
      setError(`No location found called '${term}'`);
    } else if (locations.find((item) => item.id === location.id)) {
      setWarning(`Location '${term}' is already in the list.`);
    } else {
      setLocations([location, ...locations]);
    }
  };

  return (
    <Card style={{width: '380px', marginTop: '5px', marginLeft: '5px'}}>
      <CardContent>
        <h1 className={styles.title}>Weather Widget</h1>
        <WeatherWidgetLocationSearch onSearch={addLocation} />
        <h2 className={styles.locations}>Locations</h2>
        {error && <WeatherWidgetAlertMessage severity='error' message={error}/>}
        {warning && <WeatherWidgetAlertMessage severity='warning' message={warning}/>}
        <WeatherWidgetLocationTable
          locations={locations}
          current={currentLocation}
          onSelect={(location) => setCurrentLocation(location)} />
        <WeatherWidgetSummary location={currentLocation}/>
      </CardContent>
    </Card>
  );
};

