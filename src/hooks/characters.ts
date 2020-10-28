import { useEffect, useState } from 'react';
import { getCharacters } from '../services/rickMortyAPI';

interface Characters { id: number, name: string, image: string }

export const useCharacters = function (page: number) {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState<Characters[]>([]);

  useEffect(() => {
    getCharacters(page)
      .then((characters => setCharacters(characters)))
      .finally(() => setLoading(false));
  }, [page]);

  return {
    loading,
    characters
  };
};
