import { useEffect, useState } from 'react';
import FlexContainer from '../../components/flex-container';
import Button from '../../components/button';
import Card from '../../components/card';

type TStarwars = {
  name?: string;
  height?: string;
  gender?: string;
};

export const Starwars = (): JSX.Element => {
  const [starWarsData, setStarWarsData] = useState<TStarwars>({});
  const [count, setCount] = useState(1);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/${count}`)
      .then((res) => res.json())
      .then((data) => setStarWarsData(data));
  }, [count]);

  return (
    <FlexContainer className='flex-col'>
      <h2>The count is {count}</h2>
      <Button onClick={handleClick}>Get next character</Button>
      <Card>
        <h2>{starWarsData.name}</h2>
        <p>Height: {starWarsData.height}</p>
        <p>Gender: {starWarsData.gender}</p>
      </Card>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </FlexContainer>
  );
};
