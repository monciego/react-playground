import { useEffect, useState } from 'react';
import Button from '../../components/button';

export const WindowSize = (): JSX.Element => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <Button onClick={() => setToggle(!toggle)}>
        {toggle ? 'Hide' : 'Show'}
      </Button>
      {toggle && <WindoSizer />}
    </>
  );
};

const WindoSizer = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', checkSize);
    return () => {
      window.removeEventListener('resize', checkSize);
    };
  }, []);

  return (
    <>
      <h2>Window size: {size} </h2>
    </>
  );
};
