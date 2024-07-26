import { characters } from './data/dataset.js';
export function filterCharactersByFamily(family) {
  //usa el metodo "filter" para crear un nuevo arreglo
  //compara la familia del personaje (character.facts.familia) con el valor de family
  return characters.filter(character => character.facts.familia.toLowerCase() === family.toLowerCase());
}

export function sortCharactersByName(data, sortBy, sortOrder) {
  // Crea una copia del arreglo characters para no modificar el original
  const sortedCharacters = [...data]; 
  // Usa el método sort para ordenar el arreglo copiado.
  return sortedCharacters.sort((a, b) => {
    // Compara los nombres de dos personajes (a y b) para ordenarlos
    if (sortOrder === 'asc') {
      // Ordena de forma ascendente
      return a[sortBy].localeCompare(b[sortBy]);
    } else if (sortOrder === 'des') {
      // Ordena de forma descendente
      return b[sortBy].localeCompare(a[sortBy]);
    }
  });
}

// Función combinada para filtrar y ordenar
export function filterAndSortCharacters(family, order) {
  // Filtrar personajes por familia si se especifica
  let filteredCharacters = family ? filterCharactersByFamily(characters, family) : characters;

  // Ordenar personajes por nombre si se especifica el orden
  if (order) {
    filteredCharacters = sortCharactersByName(filteredCharacters, order);
  }

  return filteredCharacters;
}
//devuelve el estado actual del arreglo
export function getCharacters() {
  return characters;
}
//exportamos la data (arreglo) al main
export function calcularEstadisticas(data) {
  //data es el arreglo sobre el cual estamos aplicando el método
  //acc(objeto) es el valor acumulado que se va actualizando en cada iteración
  //current es el elemento actual del arreglo que está siendo procesado 
  return data.reduce((acc, current) => {
    
    const sitSentimental = current.facts.sitSentimental;
    if (acc[sitSentimental]) {
      //si el sitSentimental coincide suma 1 en cada iteracion
      acc[sitSentimental]++;
    } else {
      //sino solo queda en 1
      acc[sitSentimental] = 1;
    }
    //en cualquiera de los casos retorna lo acumulado
    return acc;
  }, {});
}