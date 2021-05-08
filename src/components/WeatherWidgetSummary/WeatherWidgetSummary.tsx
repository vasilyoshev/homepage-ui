import React, { useEffect, useState } from 'react';
import { WeatherWidgetEntry } from 'components';
import { readWeather, readForecast } from 'services';
import { Weather, WeatherWidgetSummaryProps } from 'interfaces';
import { Card, CardContent } from '@material-ui/core';
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
        <h2 className={styles.locName}>{location.name}</h2>
        <WeatherWidgetEntry weather={weather} />
      </Card>
      <h3 className={styles.forecastTitle}>Forecast 24h</h3>
      {forecast.map((timePoint) =>
        <Card className={styles.forecastCard} key={timePoint.dt}>
          <CardContent>
            <WeatherWidgetEntry weather={timePoint} />
          </CardContent>
        </Card>,
      )}
    </>
  );
};
