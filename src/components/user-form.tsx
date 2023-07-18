import { SyntheticEvent, useState } from 'react';
import Card from './card';

type TUsers = {
  id: string;
  firstName: string;
  email: string;
  position: string;
};

export const UserForm = (): JSX.Element => {
  const [user, setUser] = useState({
    firstName: '',
    email: '',
    position: '',
  });
  const [users, setUsers] = useState<TUsers[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (user.firstName && user.email && user.position) {
      const newUser = { ...user, id: new Date().getTime().toString() };
      setUsers([...users, newUser]);
      setUser({
        firstName: '',
        email: '',
        position: '',
      });
    }
  };
  return (
    <>
      <article className='mt-4'>
        <form className='space-y-4'>
          <div>
            <label
              htmlFor='firstName'
              className='block text-sm font-medium leading-6 text-gray-900'
            >
              First Name
            </label>
            <div className='mt-2'>
              <input
                id='firstName'
                name='firstName'
                type='text'
                value={user.firstName}
                onChange={handleChange}
                autoComplete='firstName'
                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              />
            </div>
          </div>
          <div>
            <label
              htmlFor='email'
              className='block text-sm font-medium leading-6 text-gray-900'
            >
              Email address
            </label>
            <div className='mt-2'>
              <input
                id='email'
                name='email'
                type='email'
                value={user.email}
                onChange={handleChange}
                autoComplete='email'
                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              />
            </div>
          </div>
          <div>
            <label
              htmlFor='position'
              className='block text-sm font-medium leading-6 text-gray-900'
            >
              Position
            </label>
            <div className='mt-2'>
              <input
                id='position'
                name='position'
                type='text'
                value={user.position}
                onChange={handleChange}
                autoComplete='position'
                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              />
            </div>
          </div>

          <div>
            <button
              type='submit'
              onClick={handleSubmit}
              className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            >
              Add User
            </button>
          </div>
        </form>
      </article>
      <Users users={users} />
    </>
  );
};

type TUsersProps = {
  users: TUsers[];
};

export const Users = ({ users }: TUsersProps): JSX.Element => {
  return (
    <section className='grid grid-cols-1 gap-2 mt-4 sm:grid-cols-2 lg:grid-cols-4'>
      {users.map((user) => {
        return (
          <Card key={user.id}>
            <div className='flex items-center text-sm gap-2'>
              <h2>{user.firstName}</h2>
              <div className='bg-slate-600 text-xs py-[.125em] rounded px-2'>
                {user.position}
              </div>
            </div>
            <a
              className='text-xs underline text-indigo-300'
              href={`mailto:${user.position}`}
            >
              {user.email}
            </a>
          </Card>
        );
      })}
    </section>
  );
};
