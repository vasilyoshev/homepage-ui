import { Weather, WeatherLocation } from 'interfaces';

const key: string = 'ced069f709f66960a047464843d02244' as string;
if (key === undefined) {
  throw new Error('No Open Weather API Key defined');
}
const keyQuery = `appid=${key}`;
const server = 'http://api.openweathermap.org/data/2.5';

export const searchLocation = async (term: string): Promise<WeatherLocation | undefined> => {
  const result = await fetch(`${server}/weather?q=${term}&${keyQuery}`);

  if (result.status === 404) return undefined;
  if (result.status !== 200) throw new Error('Failed to read location data');

  return await result.json();
};

export const readWeather = async (locationId: number): Promise<Weather> => {
  const current = await fetch(`${server}/weather?id=${locationId}&${keyQuery}&units=metric`);

  if (current.status !== 200) throw new Error('Failed to read location data');

  return await current.json();
};

export const readForecast = async (locationId: number): Promise<Weather[]> => {
  const forecast = await fetch(`${server}/forecast?id=${locationId}&${keyQuery}&units=metric&cnt=8`);

  if (forecast.status !== 200) throw new Error('Failed to read location data');

  return (await forecast.json()).list;
};

export const getIconUrl = (code: string): string => {
  return `http://openweathermap.org/img/wn/${code}.png`;
};
