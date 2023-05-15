import { IoIosArrowBack } from 'react-icons/io';
import { BsThreeDots } from 'react-icons/bs';
import Avatar from '../../components/avatar/Avatar';
import Button from '../../components/button/Button';

type MessageHeaderProps = {
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const MessageHeader = ({ handleClick }: MessageHeaderProps) => {
  return (
    <div className='sticky left-0 right-0 top-0 z-10 flex w-full items-center justify-between bg-white px-6 py-4 shadow-sm'>
      <div className='flex items-center justify-center gap-4'>
        <Button
          type='button'
          className='block cursor-pointer text-sky-500 lg:hidden'
          onClick={handleClick}
        >
          <IoIosArrowBack size={20} />
        </Button>
        <div className='flex items-start justify-center gap-4'>
          <Avatar />
          <div>
            <h3 className='font-bold'>ABHI</h3>
            <span className='text-sm font-semibold text-gray-500'>Active</span>
          </div>
        </div>
      </div>
      <Button type='button' className='cursor-pointer text-sky-500'>
        <BsThreeDots size={20} />
      </Button>
    </div>
  );
};

export default MessageHeader;
