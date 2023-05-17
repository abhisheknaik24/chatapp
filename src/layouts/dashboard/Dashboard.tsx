import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';
import Chats from '../chats/Chats';
import Messages from '../messages/Messages';
import Panel from '../panel/Panel';
import Contacts from '../contacts/Contacts';

const Dashboard = () => {
  const panel = useSelector((state: RootState) => state.panel.value);

  return (
    <div className='flex flex-col items-start justify-start overflow-hidden bg-white lg:flex-row'>
      <Panel />
      {panel === 'chats' && <Chats />}
      {panel === 'contacts' && <Contacts />}
      <Messages />
    </div>
  );
};

export default Dashboard;
