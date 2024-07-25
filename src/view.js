export function renderItems(characters) {
  const characterList = document.querySelector('#character-list');
  characterList.innerHTML = ''; // Limpiar lista antes de renderizar nuevos personajes

  characters.forEach(character => {
    const liElement = document.createElement('li'); // Crear un elemento <li> por cada personaje
    liElement.classList.add('personajes');
    liElement.setAttribute('itemscope', ''); // Añadir el atributo itemscope
    liElement.setAttribute('itemtype', 'https://schema.org/Thing'); // Añadir el atributo itemtype
    liElement.setAttribute("data-id", character.id);

    liElement.innerHTML = `
      <h3>${character.name}</h3>
      <img src="${character.imageUrl}" alt="${character.name}" />
      <p>Edad: ${character.facts.edad}</p>
      <p>Situación Sentimental: ${character.facts.sitSentimental}</p>
      <p>${character.shortDescription}</p>
    `;

    characterList.appendChild(liElement); // Añadir el <li> al <ul> existente
  });

  return characterList;
}
