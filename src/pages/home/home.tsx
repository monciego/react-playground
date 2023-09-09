import bytesReact from '../../assets/bytes-react.svg';
import { Link } from 'react-router-dom';

export const Home = (): JSX.Element => {
  return (
    <main className='flex mt-20 items-center flex-col justify-center'>
      <div className='relative'>
        <h1 className='text-4xl sm:text-5xl md:text-7xl font-syncopate uppercase text-center'>
          The react <br /> playground
        </h1>
        <img
          className='absolute -top-8 -right-4 sm:-top-16  sm:-right-6 h-14 sm:h-auto'
          src={bytesReact}
          alt={`React bytes logo`}
        />
      </div>

      <p className='w-full sm:max-w-2xl mt-2 mb-6 text-center text-lg  px-4 md:text-2xl'>
        React Playground is a collection of projects and experiments aimed at
        exploring and mastering React.js.
      </p>
      <Link
        className='uppercase w-72 text-2xl bg-[#FCBA28] hover:bg-[#ebab22] text-[#0F0D0E] px-4 py-2 rounded text-center font-bold inline-block'
        to={`projects`}
      >
        explore
      </Link>

      <p className='absolute bottom-4 text-xs text-slate-400 right-4'>
        Developed by{' '}
        <a
          target='__blank'
          href='https://jerichobantiquete.vercel.app/'
          className='text-slate-300 hover:underline'
        >
          Jericho P. Bantiquete
        </a>
      </p>
    </main>
  );
};
