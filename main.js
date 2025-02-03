import { characters } from './data/dataset.js';
import { renderItems } from './view.js';
import { calcularEstadisticas, getCharacters, filterCharactersByFamily, sortCharactersByName } from './dataFunctions.js';

function init() {
  const familyFilter = document.querySelector('#family-filter');
  const sortFilter = document.querySelector('#alfabetico');
  const clearButton = document.querySelector('[data-testid="button-clear"]');
  const botonCalcularEstadisticas = document.querySelector('#calcularEstadisticas');
  const resultadoEstadisticas = document.querySelector('#resultado-estadisticas');

  resultadoEstadisticas.style.display = 'none'; // Estadísticas ocultas al inicio
  renderItems(getCharacters());

  let filteredCharacters = getCharacters(); // Inicialmente, todos los personajes

  familyFilter.addEventListener('change', () => {
    filteredCharacters = filterCharactersByFamily(familyFilter.value);
    renderItems(filteredCharacters);

    // 🔹 Ocultar estadísticas al cambiar el filtro
    resultadoEstadisticas.style.display = 'none';
  });

  sortFilter.addEventListener('change', () => {
    let datafilter;
    if (familyFilter.value === "") {
      datafilter = sortCharactersByName(characters, "name", sortFilter.value);
    } else {
      datafilter = sortCharactersByName(filteredCharacters, "name", sortFilter.value);
    }
    renderItems(datafilter);
  });

  clearButton.addEventListener('click', () => {
    familyFilter.value = '';
    sortFilter.value = '';
    filteredCharacters = getCharacters(); // Restablecer datos originales
    renderItems(filteredCharacters);

    // 🔹 Ocultar estadísticas al limpiar el filtro
    resultadoEstadisticas.style.display = 'none';
  });

  botonCalcularEstadisticas.addEventListener('click', () => {
    actualizarEstadisticas(filteredCharacters);
  });

  function actualizarEstadisticas(data) {
    const stats = calcularEstadisticas(data);
    resultadoEstadisticas.innerHTML = `
      <p>Casados: ${stats.casados}</p>
      <p>Solteros: ${stats.solteros}</p>
      <p>Viudos: ${stats.viudos}</p>
      <p>Amantes: ${stats.amantes}</p>
    `;
    resultadoEstadisticas.style.display = 'flex'; // 🔹 Mostrar estadísticas solo cuando se presiona el botón
  }
}

document.addEventListener('DOMContentLoaded', init);
