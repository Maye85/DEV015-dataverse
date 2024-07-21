import { filterCharactersByFamily, sortCharactersByName, getCharacters } from './dataFunctions.js';
import { renderItems } from './view.js';

function init() {
  const familyFilter = document.getElementById('family-filter');
  const sortFilter = document.getElementById('alfabetico');
  const clearButton = document.querySelector('[data-testid="button-clear"]');

  // Renderizar todos los personajes inicialmente
  renderItems(getCharacters());

  familyFilter.addEventListener('change', () => {
    const filteredCharacters = filterCharactersByFamily(familyFilter.value);
    renderItems(filteredCharacters);
  });

  sortFilter.addEventListener('change', () => {
    const sortedCharacters = sortCharactersByName(sortFilter.value);
    renderItems(sortedCharacters);
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
