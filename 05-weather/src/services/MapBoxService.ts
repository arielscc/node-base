import axios from 'axios';
import 'dotenv/config';

export const mapBoxInstance = axios.create({
  baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
  params: {
    access_token: process.env.MAPBOX_KEY,
    limit: 5,
    language: 'es',
  },
});
