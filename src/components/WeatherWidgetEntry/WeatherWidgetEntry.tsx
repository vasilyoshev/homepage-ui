import React from 'react';
import { WeatherWidgetEntryProps } from 'interfaces';
import { getIconUrl, convertUnixTimeToDate } from 'services';
import styles from './WeatherWidgetEntry.module.scss';

export const WeatherWidgetEntry: React.FC<WeatherWidgetEntryProps> = ({ weather }) => {
  return (
    <>
      <p className={styles.time}>{convertUnixTimeToDate(weather.dt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })} </p>
      <div className={styles.flex}>
        <p className={styles.temp}>Temperature: {weather.main.temp.toFixed(1)}°C</p>
        <p className={styles.temp}>Humidity: {weather.main.humidity}%</p>
        <p className={styles.temp}>Max Temp: {weather.main.temp_max.toFixed(1)}°C</p>
        <p className={styles.temp}>Mix Temp: {weather.main.temp_min.toFixed(1)}°C</p>
      </div>

      {weather.weather.map((condition) =>
        <div className={styles.weatherEntry} key={condition.id}>
          <img
            className={styles.weatherIcon}
            src={getIconUrl(condition.icon)}
            alt={condition.main}/>
        </div>)
      }
    </>
  );
};
