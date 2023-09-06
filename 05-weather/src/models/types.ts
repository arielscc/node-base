export enum MenuOptions {
  BuscarCiudad = 1,
  Historial = 2,
  Salir = 0,
}

export interface MapBox {
  features: Feature[];
}

export interface Feature {
  id: string;
  place_name: string;
  center: number[];
}

export interface Place {
  id: string;
  name: string;
  lng: number;
  lat: number;
}
export interface Weather {
  main: Main;
  weather: WeatherElement[];
  visibility: number;
  timezone: number;
  id: number;
  name: string;
}

export interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

export interface WeatherElement {
  id: number;
  main: string;
  description: string;
  icon: string;
}
