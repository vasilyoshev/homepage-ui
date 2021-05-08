import { Color } from '@material-ui/lab/Alert';

export interface Coordinates {
    lon: number;
    lat: number;
}

export interface WeatherLocation {
    coord: Coordinates;
    id: number;
    name: string;
}

export interface WeatherConditions {
    id: number;
    main: string;
    description: string;
    icon: string;
}

export interface MainWeatherData {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
}

export interface Weather {
    weather: WeatherConditions[];
    main: MainWeatherData;
    dt: number;
}

export interface WeatherWidgetEntryProps {
 weather: Weather;

}

export interface WeatherWidgetSummaryProps {
    location?: WeatherLocation;
}

export interface WeatherWidgetAlertMessageProps {
    message: string;
    severity: Color;
}
