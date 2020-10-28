export const getCharacters = async function (page = 1) {
  const res: Response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
  const json: {results: [{id: number, name: string, image: string}]} = await res.json();

  if(!res.ok) throw new Error('oops');

  return json.results.map(character => ({
    id: character.id,
    name: character.name,
    image: character.image
  }));
};
