import React, { useEffect, useState } from 'react';
import { WeatherWidgetEntry } from 'components';
import { readWeather, readForecast } from 'services';
import { Weather, WeatherWidgetSummaryProps } from 'interfaces';
import { Card } from '@material-ui/core';
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
      <Card className={styles.weatherCard}>
        <h3>{location.name}</h3>
        <WeatherWidgetEntry weather={weather} />
      </Card>
      <h4>Forecast 24h</h4>
      {forecast.map((timePoint) =>
        <Card className={styles.forecastCard} key={timePoint.dt}>
          <WeatherWidgetEntry weather={timePoint} />
        </Card>,
      )}
    </>
  );
};
