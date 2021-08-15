import React from 'react';
import { WeatherWidgetEntryProps } from 'interfaces';
import { getIconUrl, convertUnixTimeToDate } from 'services';
import { Box } from '@material-ui/core';
import styles from './WeatherWidgetEntry.module.scss';

export const WeatherWidgetEntry: React.FC<WeatherWidgetEntryProps> = ({ weather }) => {
  return (
    <>
      <Box
        display='flex'
        flexDirection="row"
        justifyContent='space-around'
        mb={1}>
        <Box
          p={0.5}
          border={1}
          borderRadius={16}
          textAlign='center'
          width='40%'
          color="info.contrastText"
          bgcolor="success.main"
          fontSize={20}
          fontWeight="fontWeightBold">
          {convertUnixTimeToDate(weather.dt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })}
        </Box>
        <Box
          p={0.5}
          border={1}
          borderRadius={16}
          textAlign='center'
          width='40%'
          color="error.contrastText"
          bgcolor="error.main"
          fontSize={20}
          fontWeight="fontWeightBold"
        >
          {weather.main.temp.toFixed(1)}°C
        </Box>
      </Box>
      <Box display='flex' flexDirection="column">
        <Box
          p={0.5}
          mb={1}
          border={1}
          borderRadius={16}
          textAlign='center'
          color="info.contrastText"
          fontWeight="fontWeightMedium"
          width='50%'
          fontSize={16}
          bgcolor="text.secondary">
          Humidity: {weather.main.humidity}%
        </Box>
        <Box
          p={0.5}
          mb={1}
          border={1}
          borderRadius={16}
          textAlign='center'
          color="info.contrastText"
          fontWeight="fontWeightMedium"
          width='50%'
          fontSize={16}
          bgcolor="text.secondary">
            Max Temp: {weather.main.temp_max.toFixed(1)}°C
        </Box>
        <Box
          p={0.5}
          border={1}
          borderRadius={16}
          textAlign='center'
          color="info.contrastText"
          fontWeight="fontWeightMedium"
          width='50%'
          fontSize={16}
          bgcolor="text.secondary">
            Mix Temp: {weather.main.temp_min.toFixed(1)}°C
        </Box>
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
