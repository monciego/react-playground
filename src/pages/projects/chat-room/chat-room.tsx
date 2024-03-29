import { useEffect } from 'react';
import { createConnection } from './chat';
import FlexContainer from '../../../components/flex-container';

const serverUrl = 'https://localhost:1234';

export const ChatRoom = ({ roomId }: { roomId: string }): JSX.Element => {
  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => {
      connection.disconnect();
    };
  }, [roomId]);

  return (
    <FlexContainer>
      <h1>Welcome to the {roomId} room!</h1>
    </FlexContainer>
  );
};
