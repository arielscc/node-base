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
