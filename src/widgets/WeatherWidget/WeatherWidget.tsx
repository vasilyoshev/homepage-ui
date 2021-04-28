import React, {useState} from 'react';
import { WeatherWidgetLocationSearch, WeatherWidgetLocationTable, WeatherWidgetWarningAlert,  WeatherWidgetErrorAlert, WeatherWidgetSummary } from 'components';
import { WeatherLocation } from 'interfaces';
import { searchLocation } from 'services';
import styles from './WeatherWidget.module.scss';

export const WeatherWidget: React.FC = () => {
  const [locations, setLocations] = useState<WeatherLocation[]>([]);
  const [currentLocation, setCurrentLocation] = useState<WeatherLocation | null>(null);
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
    <main>
      <h1 className={styles.title}>Weather Widget</h1>
      <WeatherWidgetLocationSearch onSearch={addLocation} />
      <h2 className={styles.title}>Locations</h2>
      <WeatherWidgetWarningAlert message={error} />
      <WeatherWidgetErrorAlert message={warning}/>
      <WeatherWidgetLocationTable
        locations={locations}
        current={currentLocation}
        onSelect={(location) => setCurrentLocation(location)} />
      <WeatherWidgetSummary location={currentLocation}/>
    </main>
  );
};
