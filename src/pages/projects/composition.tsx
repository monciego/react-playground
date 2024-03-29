import Card from '../../components/card';

export const Composition = (): JSX.Element => {
  return (
    <>
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
    </>
  );
};
