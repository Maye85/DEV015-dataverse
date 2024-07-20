import { characters } from './data/dataset.js';
export function filterCharactersByFamily(family) {
  //usa el metodo "filter" para crear un nuevo arreglo
  //compara la familia del personaje (character.facts.familia) con el valor de family
  return characters.filter(character => character.facts.familia.toLowerCase() === family.toLowerCase());
}

export function sortCharactersByName(order) {
  // Crea una copia del arreglo characters para no modificar el original
  const sortedCharacters = [...characters]; 
  // Usa el método sort para ordenar el arreglo copiado.
  return sortedCharacters.sort((a, b) => {
    // Compara los nombres de dos personajes (a y b) para ordenarlos
    if (order === 'asc') {
      // Ordena de forma ascendente
      return a.name.localeCompare(b.name);
    } else if (order === 'des') {
      // Ordena de forma descendente
      return b.name.localeCompare(a.name);
    }
    // Devuelve 0 si el valor de order no es 'asc' ni 'des'
    // manteniendo el orden original
    return 0;
  });
}
//devuelve el estado actual del arreglo
export function getCharacters() {
  return characters;
}
