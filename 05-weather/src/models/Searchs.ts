import { AxiosResponse } from 'axios';
import 'dotenv/config';
import { mapBoxInstance } from '../services/MapBoxService';
import { Feature, MapBox, Place } from './types';

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
}

export default Searchs;
