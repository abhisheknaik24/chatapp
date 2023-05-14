import { useState } from 'react';
import Chats from '../chats/Chats';
import Messages from '../messages/Messages';
import Panel from '../panel/Panel';

const Dashboard = () => {
  const [active, setActive] = useState(false);

  return (
    <div className='flex flex-col items-start justify-start overflow-hidden bg-white lg:flex-row'>
      <Panel />
      <Chats handleClick={() => setActive((prev) => !prev)} />
      <Messages
        active={active}
        handleClick={() => setActive((prev) => !prev)}
      />
    </div>
  );
};

export default Dashboard;
