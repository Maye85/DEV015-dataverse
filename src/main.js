import {characters} from './data/dataset.js';
import { filterCharactersByFamily, sortCharactersByName, getCharacters } from './dataFunctions.js';
import { renderItems } from './view.js';

function init() {
  const familyFilter = document.querySelector('#family-filter');
  const sortFilter = document.querySelector('#alfabetico');
  const clearButton = document.querySelector('[data-testid="button-clear"]');

  // Renderizar todos los personajes inicialmente
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
  
}

// Llamar a la función init() cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', init);
