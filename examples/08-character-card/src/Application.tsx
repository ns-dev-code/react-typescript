import * as React from 'react';

import { CharacterType, fetchCharacter } from './characters';

import { Loading } from './Loading';
import { CharacterInformation } from './CharacterInformation';

const Application = () => {
  const [character, setCharater] = React.useState<CharacterType | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    setTimeout(() => {
      fetchCharacter().then((c) => {
        setCharater(c);
        setLoading(false);
      });
    }, 1000);
  }, []);

  return (
    <main>
      {loading && <Loading />}
      {character && <CharacterInformation character={character} />}
      {/* {loading && !character ? (
        <Loading />
      ) : (
        <CharacterInformation character={character} />
      )} */}
    </main>
  );
};

export default Application;
