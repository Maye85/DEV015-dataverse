import {characters} from './data/dataset.js';
import { renderItems } from './view.js';
import { calcularEstadisticas, getCharacters, filterCharactersByFamily, sortCharactersByName } from './dataFunctions.js';
//se agrega calcularEstadicticas en el import de dataFuntion
function init() {
  const familyFilter = document.querySelector('#family-filter');
  const sortFilter = document.querySelector('#alfabetico');
  const clearButton = document.querySelector('[data-testid="button-clear"]');
  const botonCalcularEstadisticas = document.querySelector('#calcularEstadisticas');
  const resultadoEstadisticas = document.querySelector('#resultado-estadisticas');

  resultadoEstadisticas.style.display = 'none';
  // busca la data sino que la prepara para ser usada
  renderItems(getCharacters());

  familyFilter.addEventListener('change', () => {
    const filteredCharacters = filterCharactersByFamily(familyFilter.value);
    renderItems(filteredCharacters);
  });

  sortFilter.addEventListener('change', () => {
    const filteredCharacters = filterCharactersByFamily(familyFilter.value);
    let datafilter;
    if (familyFilter.value=== ""){
      console.log (familyFilter.value)
      datafilter = sortCharactersByName(characters, "name", sortFilter.value);
      console.log (datafilter)
    }
    else{
      datafilter = sortCharactersByName(filteredCharacters, "name", sortFilter.value);
    }
    renderItems(datafilter)
  });

  clearButton.addEventListener('click', () => {
    // Restablecer los filtros
    familyFilter.value = '';
    sortFilter.value = '';

    // Renderizar todos los personajes nuevamente sin aplicar filtros adicionales
    renderItems(getCharacters()); // Asegúrate de que getCharacters() devuelva todos los personajes
  });
  //creamos el metodo addEventListener y el manejador de evento clic
  botonCalcularEstadisticas.addEventListener('click', () => {
    const stats = calcularEstadisticas(getCharacters());
    resultadoEstadisticas.innerHTML = `
      <p>Casados: ${stats.casados}</p>
      <p>Solteros: ${stats.solteros}</p>
      <p>Viudos: ${stats.viudos}</p>
      <p>Amantes: ${stats.amantes}</p>
    `;
    // Mostrar el contenedor de resultados
    resultadoEstadisticas.style.display = 'flex'; // Mostrar el contenedor
  });
}

document.addEventListener('DOMContentLoaded', init);