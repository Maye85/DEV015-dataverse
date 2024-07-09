import { characters } from './data/dataset.js';
//de donde viene (family)?
export function filterCharactersByFamily(family) {
  //usa el metodo "filter" para crear un nuevo arreglo
  //compara la familia del personaje (character.facts.familia) con el valor de family
  return characters.filter(character => character.facts.familia.toLowerCase() === family.toLowerCase());
}

export function sortCharactersByName(order) {
  //crea una copia del arreglo characters para no modificar el original
  const sortedCharacters = [...characters]; 
  //usa el método sort para ordenar el arreglo copiado.
  return sortedCharacters.sort((a, b) => {
    //compara los nombres de dos personajes (a y b) para ordenarlos
    if (order === 'asc') {
      //
    } else if (order === 'des') {
      //El método localeCompare es una función que compara dos cadenas de texto
      return b.name.localeCompare(a.name);
    }
    //devuelve 0 si el valor de order no es 'asc' ni 'des'
    //mantiendo el orden original
    return 0;
  });
}
//devuelve el estado actual del arreglo
export function getCharacters() {
  return characters;
}
