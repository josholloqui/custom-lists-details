import * as React from 'react';

interface Props {
  name: string,
  image: string
}

const CharacterItem: React.FunctionComponent<Props> = ({ name, image }) => (
  <figure>
    <img src={image} alt={name} />
    <figcaption>{name}</figcaption>
  </figure>
);

export default CharacterItem;
