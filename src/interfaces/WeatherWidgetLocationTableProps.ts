import { WeatherLocation } from 'interfaces';

export interface WeatherWidgetLocationTableProps {
    locations: WeatherLocation[];
    current: WeatherLocation | null;
    onSelect: (location: WeatherLocation) => void;
  }
