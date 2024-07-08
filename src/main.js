import { filterCharactersByFamily, sortCharactersByName, getCharacters } from './dataFunctions.js';
import { renderCharacters } from './view.js';

function init() {
  const familyFilter = document.getElementById('family-filter');
  const sortFilter = document.getElementById('alfabetico');
  const clearButton = document.querySelector('[data-testid="button-clear"]');

  // Renderizar todos los personajes inicialmente
  renderCharacters(getCharacters());

  familyFilter.addEventListener('change', () => {
    const filteredCharacters = filterCharactersByFamily(familyFilter.value);
    renderCharacters(filteredCharacters);
  });

  sortFilter.addEventListener('change', () => {
    const sortedCharacters = sortCharactersByName(sortFilter.value);
    renderCharacters(sortedCharacters);
  });

  clearButton.addEventListener('click', () => {
    // Restablecer los filtros
    familyFilter.value = '';
    sortFilter.value = '';

    // Renderizar todos los personajes nuevamente sin aplicar filtros adicionales
    renderCharacters(getCharacters()); // Asegúrate de que getCharacters() devuelva todos los personajes
  });
}

// Llamar a la función init() cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', init);
