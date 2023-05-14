import { IoIosArrowBack } from 'react-icons/io';
import { BsThreeDots } from 'react-icons/bs';
import Avatar from '../../components/avatar/Avatar';

type MessageHeaderProps = {
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const MessageHeader = ({ handleClick }: MessageHeaderProps) => {
  return (
    <div className='sticky left-0 right-0 top-0 z-10 flex w-full items-center justify-between bg-white px-6 py-4 shadow-sm'>
      <div className='flex items-center justify-center gap-4'>
        <button
          className='block cursor-pointer text-sky-500 lg:hidden'
          onClick={handleClick}
        >
          <IoIosArrowBack size={20} />
        </button>
        <div className='flex items-start justify-center gap-4'>
          <Avatar />
          <div>
            <h3 className='font-bold'>ABHI</h3>
            <span className='text-sm font-semibold text-gray-500'>Active</span>
          </div>
        </div>
      </div>
      <button className='cursor-pointer text-sky-500'>
        <BsThreeDots size={20} />
      </button>
    </div>
  );
};

export default MessageHeader;
