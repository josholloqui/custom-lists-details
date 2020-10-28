import * as React from 'react';
import CharacterItem from './CharacterItem';
import { useCharacters } from '../../hooks/characters';

interface Props {id: number, name: string, image: string}

const CharacterList = ({page}: {page: number}) => {
  const { characters, loading } = useCharacters(page);
  if(loading) return <h1>Loading...</h1>;

  const characterElements = characters.map((character: Props) => (
    <li key={character.id}>
      <CharacterItem {...character} />
    </li>
  ));

  return (
    <ul data-testid='characters'>
      {characterElements}
    </ul>
  );
};

export default CharacterList;
