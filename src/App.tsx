import { useState } from 'react';
import Button from './components/button';
import Card from './components/card';
import { Counter } from './components/counter';
import Modal from './components/modal';
import Navbar from './components/navbar';
import { Toggle } from './components/toggle';

const App = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <Navbar />
      <main className='px-4 md:px-6 py-6'>
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
        <Button className='my-4'>Primary Button</Button>
        <Modal />
        <div className='mb-4'>
          <Counter />
        </div>
        <div>
          <Toggle toggle={toggle} handleToggle={handleToggle} />
          {toggle && <div>Hello React</div>}
        </div>
      </main>
    </>
  );
};

export default App;
