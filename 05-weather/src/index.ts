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

        search.saveHistory(name);

        const weather = await search.getWeatherByCoords(lat, lng);
        if (!weather) {
          console.log('No se pudo determinar el clima de la ciudad'.red);
          continue;
        }

        const { temp, temp_max, temp_min, description } = weather;

        console.log('\nInformación de la ciudad\n'.america.bold);
        console.log('Ciudad:', name);
        console.log('Lat:', lat);
        console.log('Lng:', lng);
        console.log(`Temperatura: ${temp}°C`);
        console.log('Mínima:', temp_min);
        console.log('Máxima:', temp_max);
        console.log('Como está el clima:', description);

        break;

      case MenuOptions.Historial:
        search.history.forEach((place, i) => {
          const idx = `${i + 1}.`.green;
          console.log(`${idx} ${place}`);
        });
        break;
    }

    await pauseMenu();
  } while (option !== MenuOptions.Salir);
};

Weather();
