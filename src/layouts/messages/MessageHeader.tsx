import { IoIosArrowBack } from 'react-icons/io';
import Avatar from '../../components/avatar/Avatar';
import Button from '../../components/button/Button';
import { useSelector, useDispatch } from 'react-redux';
import { updateChat } from '../../redux/chat/chatSlice';
import { RootState } from '../../redux/store';

const MessageHeader = () => {
  const chatWith = useSelector((state: RootState) => state.chat.chatWith);

  const dispatch = useDispatch();

  return (
    <div className='sticky left-0 right-0 top-0 z-10 flex w-full items-center justify-start bg-white px-6 py-4 shadow-sm'>
      <div className='flex items-center justify-center gap-4'>
        <Button
          type='button'
          className='block cursor-pointer text-sky-500 lg:hidden'
          onClick={() => dispatch(updateChat({ name: '', email: '' }))}
        >
          <IoIosArrowBack size={20} />
        </Button>
        <div className='flex items-center justify-center gap-4'>
          <Avatar />
          <h3 className='font-bold capitalize'>{chatWith.name}</h3>
        </div>
      </div>
    </div>
  );
};

export default MessageHeader;
