import { AiFillMessage } from 'react-icons/ai';
import { HiUsers } from 'react-icons/hi';
import PanelIcon from './PanelIcon';
import Avatar from '../../components/avatar/Avatar';

const Panel = () => {
  return (
    <div className='absolute bottom-0 left-0 right-0 z-10 flex w-full flex-row items-center justify-around overflow-hidden border-t border-gray-300 bg-white p-4 lg:relative lg:h-screen lg:w-fit lg:flex-col lg:justify-start lg:border-r lg:border-t-0'>
      <PanelIcon icon={AiFillMessage} active={true} />
      <PanelIcon icon={HiUsers} />
      <div className='mt-auto flex w-16 items-center justify-center'>
        <Avatar />
      </div>
    </div>
  );
};

export default Panel;
