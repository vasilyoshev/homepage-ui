import React, { useEffect, useState } from 'react';
import { WeatherWidgetEntry } from 'components';
import { readWeather, readForecast } from 'services';
import { Weather, WeatherWidgetSummaryProps } from 'interfaces';
import { Card, CardContent, Typography } from '@material-ui/core';
import styles from './WeatherWidgetSummary.module.scss';

export const WeatherWidgetSummary: React.FC<WeatherWidgetSummaryProps> = ({ location }) => {
  const [weather, setWeather] = useState<Weather | null>(null);
  const [forecast, setForecast] = useState<Weather[] | null>(null);
  useEffect(() => {
    (async () => {
      if (!location) return;

      const [weather, forecast] = await Promise.all([
        readWeather(location.id),
        readForecast(location.id),
      ]);
      setWeather(weather);
      setForecast(forecast);
    })();
  }, [location]);

  if (!location || !weather || !forecast) return null;

  return (
    <>
      <Card elevation={5}>
        <CardContent>
          <Typography align='center' variant="h5" color='primary'>
            {location.name}
          </Typography>
          <WeatherWidgetEntry weather={weather} />
        </CardContent>
      </Card>
      <Typography style={{marginTop: '10px'}} align='center' variant="h5" gutterBottom>
          Forecast next 24h
      </Typography>
      {forecast.map((timePoint) =>
        <Card elevation={5} className={styles.forecastCard} key={timePoint.dt}>
          <CardContent>
            <WeatherWidgetEntry weather={timePoint} />
          </CardContent>
        </Card>,
      )}
    </>
  );
};
