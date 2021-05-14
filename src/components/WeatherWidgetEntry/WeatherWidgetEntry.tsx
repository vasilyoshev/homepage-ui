import React from 'react';
import { WeatherWidgetEntryProps } from 'interfaces';
import { getIconUrl, convertUnixTimeToDate } from 'services';

export const WeatherWidgetEntry: React.FC<WeatherWidgetEntryProps> = ({ weather }) => {
  return (
    <section>
      <div>{convertUnixTimeToDate(weather.dt).toLocaleTimeString()}
      </div>
      <strong>{weather.main.temp}°C</strong>
      <div>Humidity: {weather.main.humidity}%</div>
      {weather.weather.map((condition) =>
        <div key={condition.id}>
          <img src={getIconUrl(condition.icon)} alt={condition.main}/> {condition.main}
        </div>)
      }
    </section>
  );
};
