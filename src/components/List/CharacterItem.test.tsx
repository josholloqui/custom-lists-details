import * as React from 'react';
import { render, cleanup } from '@testing-library/react'
import CharacterItem from './CharacterItem';
import { MemoryRouter } from 'react-router-dom';

describe('CharacterItem Component', () => {
  afterEach(() => cleanup());

  it('render a CharacterItem', () => {
    const character = {
      id: 1,
      name: 'josh',
      image: 'imageurl'
    };

    const { asFragment } = render(
      <MemoryRouter>
        <CharacterItem {...character} />
      </MemoryRouter>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
