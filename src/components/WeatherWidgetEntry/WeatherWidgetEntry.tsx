import React from 'react';
import { WeatherWidgetEntryProps } from 'interfaces';
import { getIconUrl, convertUnixTimeToDate } from 'services';
import styles from './WeatherWidgetEntry.module.scss';

export const WeatherWidgetEntry: React.FC<WeatherWidgetEntryProps> = ({ weather }) => {
  return (
    <>
      <div>
        {convertUnixTimeToDate(weather.dt).toLocaleTimeString()}
      </div>
      <strong>{weather.main.temp}°C</strong>
      <div>
        Humidity: {weather.main.humidity}%
      </div>
      {weather.weather.map((condition) =>
        <div className={styles.weatherEntry}  key={condition.id}>
          <img className={styles.weatherIcon} src={getIconUrl(condition.icon)} alt={condition.main}/>
        </div>)
      }
    </>
  );
};
