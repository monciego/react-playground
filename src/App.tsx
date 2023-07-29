import { useEffect, useState } from 'react';
import Button from './components/button';
import Card from './components/card';
import { Counter } from './components/counter';
import Modal from './components/modal';
import Navbar from './components/navbar';
import { Toggle } from './components/toggle';
import { GithubUsers } from './components/github-users';
import { WindowSize } from './components/window-size';
import { UserForm } from './components/user-form';
import { ComplexForm } from './components/complex-form';

type Starwars = {
  name?: string;
  height?: string;
  gender?: string;
};

const App = () => {
  const [toggle, setToggle] = useState(false);
  const [starWarsData, setStarWarsData] = useState<Starwars>({});
  const [count, setCount] = useState(1);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/${count}`)
      .then((res) => res.json())
      .then((data) => setStarWarsData(data));
  }, [count]);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <Navbar />
      <main className='px-4 md:px-6 py-6'>
        <div className='mb-4'>
          <ComplexForm />
        </div>
        <Card
          fallback={true}
          title='React Playground'
          description='A playground where I learn and explore React'
        />
        <Card className='flex gap-4 mt-4'>
          <img
            className='rounded-full'
            src='https://lh3.googleusercontent.com/a/AGNmyxbifSGloYQ0Z9QDzZ-Sm1S71m868WVsmdQA9GET1g=s96-c'
            alt='Jericho'
          />
          <div>
            <h2 className='text-lg'>Jericho Bantiquete</h2>
            <p className='text-gray-300'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
              inventore?
            </p>
          </div>
        </Card>
        <div className='grid grid-cols-1 gap-2 mt-4 sm:grid-cols-2 lg:grid-cols-4'>
          <GithubUsers />
        </div>
        <div>
          <WindowSize />
        </div>
        <Button className='my-4'>Primary Button</Button>
        <Modal />
        <div className='mb-4'>
          <Counter />
        </div>
        <div>
          <Toggle toggle={toggle} handleToggle={handleToggle} />
          {toggle && <div>Hello React</div>}
        </div>
        <h2>The count is {count}</h2>
        <Button onClick={handleClick}>Get next character</Button>
        <Card>
          <h2>{starWarsData.name}</h2>
          <p>Height: {starWarsData.height}</p>
          <p>Gender: {starWarsData.gender}</p>
        </Card>
        <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        <div>
          <UserForm />
        </div>
      </main>
    </>
  );
};

export default App;
