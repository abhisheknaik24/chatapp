import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../../redux/store';
import { AiFillMessage } from 'react-icons/ai';
import { HiUsers } from 'react-icons/hi';
import { CiLogout } from 'react-icons/ci';
import PanelIcon from './PanelIcon';
import Avatar from '../../components/avatar/Avatar';
import { updatePanel } from '../../redux/panel/panelSlice';
import { useLocalStorage } from 'usehooks-ts';

const Panel = () => {
  const [token, setToken] = useLocalStorage<string | undefined>(
    'token',
    undefined
  );

  const panel = useSelector((state: RootState) => state.panel.value);

  const dispatch = useDispatch();

  const handleLogout = () => {
    setToken(undefined);
  };

  return (
    <div className='absolute bottom-0 left-0 right-0 z-10 flex w-full flex-row items-center justify-around overflow-hidden border-t border-gray-300 bg-white p-4 lg:relative lg:h-screen lg:w-fit lg:flex-col lg:justify-start lg:border-r lg:border-t-0'>
      <PanelIcon
        icon={AiFillMessage}
        active={panel === 'chats' ? true : false}
        handlePanel={() => dispatch(updatePanel('chats'))}
      />
      <PanelIcon
        icon={HiUsers}
        active={panel === 'contacts' ? true : false}
        handlePanel={() => dispatch(updatePanel('contacts'))}
      />
      <PanelIcon icon={CiLogout} active={false} handlePanel={handleLogout} />
      <div className='mt-auto flex w-16 items-center justify-center'>
        <Avatar />
      </div>
    </div>
  );
};

export default Panel;
