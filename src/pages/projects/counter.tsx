import { useState } from 'react';
import Card from '../../components/card';
import Button from '../../components/button';
import FlexContainer from '../../components/flex-container';

export const Counter = (): JSX.Element => {
  const [count, setCount] = useState(0);

  return (
    <FlexContainer className='mt-16'>
      <Card className='bg-slate-950 text-white inline-flex items-center gap-4'>
        <Button onClick={() => setCount((prev) => prev + 1)} className='py-1'>
          Increment +
        </Button>
        {count}
        <Button onClick={() => setCount((prev) => prev - 1)} className='py-1'>
          Decrement -
        </Button>
      </Card>
    </FlexContainer>
  );
};
