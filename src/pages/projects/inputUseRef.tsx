import { useRef } from 'react';
import Button from '../../components/button';
import FlexContainer from '../../components/flex-container';

export const UseRefInput = (): JSX.Element => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <FlexContainer className='mt-16 flex-col'>
      <input
        type='text'
        ref={inputRef}
        className='block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
      />
      <Button className='mt-2' onClick={() => inputRef.current?.focus()}>
        Click me to focus input
      </Button>
    </FlexContainer>
  );
};
