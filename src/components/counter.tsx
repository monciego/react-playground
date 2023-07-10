import { useState } from 'react';
import Card from './card';
import Button from './button';

export const Counter = (): JSX.Element => {
  const [count, setCount] = useState(0);

  return (
    <Card className='inline-flex items-center gap-4'>
      <Button onClick={() => setCount((prev) => prev + 1)} className='py-1'>
        +
      </Button>
      {count}
      <Button onClick={() => setCount((prev) => prev - 1)} className='py-1'>
        -
      </Button>
    </Card>
  );
};
