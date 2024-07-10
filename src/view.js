export function renderItems(characters) {
  // Obtener el elemento <ul> con id 'character-list'
  const characterList = document.getElementById('character-list');
  // Limpiar lista antes de renderizar nuevos personajes
  characterList.innerHTML = ''; 

  
  characters.forEach(character => {
    //Se utiliza el método forEach para iterar sobre cada objeto 
    const listItem = document.createElement('li');
    listItem.classList.add('personajes');
    //Se establece el contenido HTML del elemento <li> utilizando (template literals)
    //Incrustando dinámicamente propiedades del objeto character dentro de la estructura HTML
    listItem.innerHTML = `
      <h3>${character.name}</h3>
      <img src="${character.imageUrl}" alt="${character.name}" />
      <p>${character.shortDescription}</p>
    `;
    // Añade visualmente cada personaje a la lista en el documento HTML.
    characterList.appendChild(listItem);
  });
}
