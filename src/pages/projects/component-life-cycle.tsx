// https://react.dev/learn/lifecycle-of-reactive-effects

/* 
Every React component goes through the same lifecycle:
- A component mounts when it’s added to the screen.
- A component updates when it receives new props or state, usually in response to an interaction.
- A component unmounts when it’s removed from the screen.
*/

import { useState } from 'react';
import { ChatRoom } from './chat-room/chat-room';
import FlexContainer from '../../components/flex-container';

export const ComponentLifeCycle = (): JSX.Element => {
  const [roomId, setRoomId] = useState('General');

  return (
    <FlexContainer className='flex-col mt-16'>
      <label>
        Choose the chat room:
        <select
          className='ml-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
        >
          <option value='general'>General</option>
          <option value='travel'>Travel</option>
          <option value='music'>Music</option>
        </select>
      </label>
      <hr />
      <ChatRoom roomId={roomId} />
    </FlexContainer>
  );
};
