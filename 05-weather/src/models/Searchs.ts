import { AxiosResponse } from 'axios';
import 'dotenv/config';
import { mapBoxInstance } from '../services/MapBoxService';
import { openWeatherInstance } from '../services/OpenWeatherService';
import { Feature, MapBox, Place, Weather } from './types';

class Searchs {
  public history: string[];

  constructor() {
    this.history = [];
  }

  async searchCity(city: string): Promise<Place[]> {
    try {
      const { data }: AxiosResponse<MapBox> = await mapBoxInstance.get(`/${city}.json`);
      return data.features.map((place: Feature) => ({
        id: place.id,
        name: place.place_name,
        lng: place.center[0],
        lat: place.center[1],
      }));
    } catch (error) {
      return [];
    }
  }

  async getWeatherByCoords(lat: number, lon: number) {
    try {
      const { data }: AxiosResponse<Weather> = await openWeatherInstance.get('/data/2.5/weather', {
        params: {
          lat,
          lon,
        },
      });
      return {
        temp: data.main.temp,
        temp_max: data.main.temp_max,
        temp_min: data.main.temp_min,
        description: data.weather[0].description,
      };
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}

export default Searchs;
