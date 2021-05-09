import { WeatherLocation } from 'interfaces';

export interface WeatherWidgetLocationTableProps {
    locations: WeatherLocation[];
    current?: WeatherLocation;
    onSelect: (location: WeatherLocation) => void;
  }
