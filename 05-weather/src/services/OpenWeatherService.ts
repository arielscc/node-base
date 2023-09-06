import axios from 'axios';
import 'dotenv/config';

export const openWeatherInstance = axios.create({
  baseURL: 'https://api.openweathermap.org',
  params: {
    lang: 'es',
    units: 'metric',
    appid: process.env.OPEN_WEATHER_KEY,
  },
});
