import { useEffect, useState } from 'react';
import Card from '../../../components/card';
import FlexContainer from '../../../components/flex-container';
import Loading from './loading';
import ErrorText from './error';
import Notes from '../../../components/notes';
import Container from '../../../components/container';

const url = 'https://api.github.com/users';

type TUsers = {
  id: string;
  html_url: string;
  avatar_url: string;
  login: string;
};

export const GithubUsers = (): JSX.Element => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [users, setUsers] = useState<TUsers[]>([]);

  const getUsers = async () => {
    try {
      const response = await fetch(url);
      if (response.status >= 200 && response.status <= 299) {
        const users = await response.json();
        setUsers(users);
        setLoading(false);
      } else {
        setLoading(false);
        setError(true);
        throw new Error(response.statusText);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorText />;
  }

  return (
    <Container>
      <FlexContainer>
        <div className='grid w-full  grid-cols-1 gap-2 mt-4 sm:grid-cols-2 lg:grid-cols-3'>
          {users.map((user) => {
            return (
              <a key={user.id} target='__blank' href={user.html_url}>
                <Card>
                  <div className='flex gap-4'>
                    <img
                      className='rounded-full h-10 w-10'
                      src={user.avatar_url}
                      alt={user.login}
                    />
                    <div>
                      <h2 className='text-lg'>{user.login}</h2>
                      <p className='text-gray-300'>@{user.html_url}</p>
                    </div>
                  </div>
                </Card>
              </a>
            );
          })}
        </div>
      </FlexContainer>
      <Notes projectTitle='Gthub Users'>
        <ul className='list-inside list-disc'>
          <li>
            Learning{' '}
            <a
              href='https://react.dev/reference/react/useEffect'
              target='__blank'
            >
              UseEffect
            </a>{' '}
            and{' '}
            <a
              href='https://react.dev/reference/react/useState'
              target='__blank'
            >
              useState
            </a>
          </li>
          <li>Loading and error state </li>
        </ul>
      </Notes>
    </Container>
  );
};
