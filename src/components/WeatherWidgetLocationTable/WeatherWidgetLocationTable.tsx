import React from 'react';
import { WeatherWidgetLocationTableProps } from 'interfaces';

export const WeatherWidgetLocationTable: React.FC<WeatherWidgetLocationTableProps> = ({ locations }) => {
  return (
    <section>
      <h2>Locations</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {locations.map((location, index) =>
            <tr key={index}><td>{location}</td></tr>,
          )}
        </tbody>
      </table>
    </section>
  );
};
