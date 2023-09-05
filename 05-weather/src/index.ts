import { log } from 'console';
import { inquirerMenu, pauseMenu, readInput, selectPlace } from './helpers/inquirerMenu';
import Searchs from './models/Searchs';
import { MenuOptions } from './models/types';

const Weather = async () => {
  let option: MenuOptions;

  const search = new Searchs();
  do {
    option = await inquirerMenu();

    switch (option) {
      case MenuOptions.BuscarCiudad:
        const city = await readInput('Ciudad:'.america);
        const cities = await search.searchCity(city);
        const id = await selectPlace(cities);
        if (id === '0') continue;
        const { name, lat, lng } = cities.find((city) => city.id === id)!;

        console.log('\nInformación de la ciudad\n'.america.bold);
        console.log('Ciudad:', name);
        console.log('Lat:', lat);
        console.log('Lng:', lng);
        console.log('Temperatura:', 20);
        console.log('Mínima:', 20);
        console.log('Máxima:', 20);
        console.log('Como está el clima:', 'Soleado');
        break;
      case MenuOptions.Historial:
        log('Historial');
        break;
    }

    await pauseMenu();
  } while (option !== MenuOptions.Salir);
};

Weather();
