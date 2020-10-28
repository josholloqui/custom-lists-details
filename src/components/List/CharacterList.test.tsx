import * as React from 'react';
import {
  screen,
  waitFor, 
  render
} from '@testing-library/react'
import CharacterList from './CharacterList';
import { getCharacters } from '../../services/rickMortyAPI';
import { MemoryRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import { mocked } from 'ts-jest'


jest.mock('../../services/rickMortyAPI');

describe('CharacterList component', () => {
  it('render CharacterList', async() => {
    act(() => {
      mocked(getCharacters).mockResolvedValue([
        { id: 1, name: 'josh', image: 'imageurl' }
      ])
    })

    render(
      <MemoryRouter>
        <CharacterList page={1} />
      </MemoryRouter>
    )

    screen.getByText('Loading...')
    
    const characterList = await screen.findByTestId('characters');

    return waitFor(() => {
      expect(characterList).not.toBeEmptyDOMElement();
    })
  })
})
