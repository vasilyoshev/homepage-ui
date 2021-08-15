import React, { useEffect, useState } from 'react';
import { WeatherWidgetEntry } from 'components';
import { readWeather, readForecast } from 'services';
import { Weather, WeatherWidgetSummaryProps } from 'interfaces';
import { Card, CardContent, Box } from '@material-ui/core';
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
      <Card>
        <CardContent>
          <Box
            bgcolor="info.main"
            color="info.contrastText"
            mb={1}
            p={0.5}
            border={1}
            borderRadius={16}
            fontSize={22}
            textAlign="center"
            fontWeight="fontWeightBold">
            {location.name}
          </Box>
          <WeatherWidgetEntry weather={weather} />
        </CardContent>
      </Card>
      <Box
        bgcolor="primary.main"
        color="primary.contrastText"
        m={1}
        p={1}
        border={1}
        borderRadius={16}
        fontSize={16}
        textAlign="center"
        fontWeight="fontWeightBold">
          Forecast 24h
      </Box>
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
