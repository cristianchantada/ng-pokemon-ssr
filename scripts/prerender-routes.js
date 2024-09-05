
const TOTAL_POKEMONS = 151;
const TOTAL_PAGES = 5;

( async () => {

  const fs = require('fs');


  // Creamos un array que va del 1 al 151
  const pokemonIds = Array.from(
    {length: TOTAL_POKEMONS},
    (_, i) => i + 1
  );

  let fileContent = pokemonIds.map( id => `/pokemons/${id}`).join('\n');

  const pokemonsPage = Array.from(
    {length: TOTAL_PAGES},
    (_, i) => i + 1
  )

  fileContent += '\n' + pokemonsPage.map( page => `/pokemons/page/${page}`).join('\n');

  // Por nombre de pokemons
  const pokemonNameList = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${TOTAL_POKEMONS}`)
    .then( resp => resp.json());

  fileContent += '\n';

  fileContent += pokemonNameList.results.map(
    pokemon =>`/pokemons/${pokemon.name}`
  ).join('\n');

  fs.writeFileSync('routes.txt', fileContent);

  console.log('Routes.txt generated');


})();