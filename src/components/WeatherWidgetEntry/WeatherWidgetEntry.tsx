import React from 'react';
import { WeatherWidgetEntryProps } from 'interfaces';
import { getIconUrl, convertUnixTimeToDate } from 'services';
import { Box, Typography } from '@material-ui/core';
import styles from './WeatherWidgetEntry.module.scss';

export const WeatherWidgetEntry: React.FC<WeatherWidgetEntryProps> = ({ weather }) => {
  return (
    <>
      <Box
        display='flex'
        flexDirection="row"
        justifyContent='space-around'
        mb={1}>
        <Typography variant="h5" color="primary" gutterBottom>
          {convertUnixTimeToDate(weather.dt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })}
        </Typography>
        <Typography variant="h5" color="primary" gutterBottom>
          {weather.main.temp.toFixed(1)}°C
        </Typography>
      </Box>
      <Box display='flex' flexDirection="column">
        <Typography>
          Humidity: {weather.main.humidity}%
        </Typography>
        <Typography>
            Max Temp: {weather.main.temp_max.toFixed(1)}°C
        </Typography>
        <Typography>
            Mix Temp: {weather.main.temp_min.toFixed(1)}°C
        </Typography>
      </Box>
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
