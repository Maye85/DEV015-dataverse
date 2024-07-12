export function renderItems(characters) {
  const characterList = document.getElementById('character-list');
  characterList.innerHTML = ''; // Limpiar lista antes de renderizar nuevos personajes
  
  const ulElement = document.createElement('ul'); // Crear el elemento <ul>

  characters.forEach(character => {
    const liElement = document.createElement('li'); // Crear un elemento <li> por cada personaje
    ulElement.appendChild(liElement); // Añadir el <li> al <ul>
    liElement.classList.add('personajes');
    liElement.setAttribute('itemscope', ''); // Añadir el atributo itemscope
    liElement.setAttribute('itemtype', 'https://schema.org/Thing'); // Añadir el atributo itemtype
    liElement.setAttribute("data-id", character.id);

    liElement.innerHTML = `
      <h3>${character.name}</h3>
      <img src="${character.imageUrl}" alt="${character.name}" />
      <p>${character.shortDescription}</p>
    `;

    
  });

  characterList.appendChild(ulElement); // Añadir el <ul> completo al contenedor
  
  return characterList;
}
