import { AxiosResponse } from 'axios';
import 'dotenv/config';
import { existsSync, mkdirSync, readFileSync, renameSync, writeFileSync } from 'fs';
import os from 'os';
import { dirname, join } from 'path';
import { mapBoxInstance } from '../services/MapBoxService';
import { openWeatherInstance } from '../services/OpenWeatherService';
import { Feature, MapBox, Place, Weather } from './types';

class Searchs {
  public history: string[];

  home = os.homedir();
  private db_file = join(this.home, '.weather', 'data.json');

  constructor() {
    this.history = [];
    this.readHistory();
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

  saveHistory(place: string) {
    if (this.history.includes(place)) return;
    this.history.unshift(place);
    this.history = this.history.splice(0, 5);

    const dir = dirname(this.db_file);
    if (!existsSync(dir)) {
      mkdirSync(dir, { recursive: true });
    }
    const tmpFile = `${this.db_file}.tmp`;
    writeFileSync(tmpFile, JSON.stringify(this.history));
    renameSync(tmpFile, this.db_file);
  }

  readHistory() {
    if (existsSync(this.db_file)) {
      const data = readFileSync(this.db_file, 'utf8');
      this.history = JSON.parse(data);
      return this.history;
    } else {
      return [];
    }
  }
}

export default Searchs;
