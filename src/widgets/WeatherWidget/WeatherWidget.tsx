import React, {useState} from 'react';
import { WeatherWidgetLocationSearch, WeatherWidgetLocationTable, WeatherWidgetAlertMessage, WeatherWidgetSummary } from 'components';
import { Card, CardContent, Typography } from '@material-ui/core';
import { WeatherLocation } from 'interfaces';
import { searchLocation } from 'services';

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
    <Card style={{width: '320px'}} elevation={6}>
      <CardContent>
        <Typography variant="h5" color="primary">
          Enter city name...
        </Typography>
        <WeatherWidgetLocationSearch onSearch={addLocation} />
        {error && <WeatherWidgetAlertMessage severity='error' message={error} />}
        {warning && <WeatherWidgetAlertMessage severity='warning' message={warning} />}
        <WeatherWidgetLocationTable
          locations={locations}
          current={currentLocation}
          onSelect={(location) => setCurrentLocation(location)} />
        <WeatherWidgetSummary location={currentLocation}/>
      </CardContent>
    </Card>
  );
};
