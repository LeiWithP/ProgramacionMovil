fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => {
        const evenID = data.results.filter(character => character.id % 2 === 0);

        const characters = data.results.map(character => {
            if (character.type === '') {
                character.type = 'Programación Móvil';
            }
            return character;
        });

        const result = characters.map(character => {
            return {
                personaje: character.name,
                episodios: character.episode.length,
                masDeCincoEpisodios: character.episode.length > 5 ? 'Si' : 'No'
            };
        });

        console.log('Personajes con ID par:', evenID);
        console.log('Personajes Programadores Moviles":', characters);
        console.log('Resultado:', result);
    })
    .catch(error => console.error('Error:', error));
