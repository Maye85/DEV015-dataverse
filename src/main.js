import {characters} from './data/dataset.js';
import { renderItems } from './view.js';
import { calcularEstadisticas, getCharacters, filterCharactersByFamily, sortCharactersByName } from './dataFunctions.js';
//se agrega calcularEstadicticas en el import de dataFuntion
function init() {
  const familyFilter = document.querySelector('#family-filter');
  const sortFilter = document.querySelector('#alfabetico');
  const clearButton = document.querySelector('[data-testid="button-clear"]');
  const botonCalcularEstadisticas = document.querySelector('#calcularEstadisticas');
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
    //calcularEstadisticas se encuentra en el dataFuntion
    const stats = calcularEstadisticas(getCharacters());
    console.log(stats);
  });
}

// Llamar a la función init() cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', init);
