import * as React from 'react';
import CharacterList from '../components/List/CharacterList';

const CharacterPage = () => {
  const [page, setPage] = React.useState(1);

  return (
    <>
      <button onClick={() => setPage(page => page - 1)} disabled={page <= 1}>&lt;</button> 
      <button onClick={() => setPage(page => page + 1)}>&gt;</button>
      <CharacterList page={page} />
    </>
  )
}

export default CharacterPage;
