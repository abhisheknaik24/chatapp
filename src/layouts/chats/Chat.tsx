import { useDispatch, useSelector } from 'react-redux';
import Avatar from '../../components/avatar/Avatar';
import { RootState } from '../../redux/store';
import { updateChat } from '../../redux/chat/chatSlice';

type ChatProps = {
  chat: {
    _id: string;
    name: string;
    email: string;
    message: string;
  };
};

const Chat = ({ chat }: ChatProps) => {
  const chatWith = useSelector((state: RootState) => state.chat.chatWith);

  const dispatch = useDispatch();

  return (
    <div
      className={`flex w-full cursor-pointer items-start justify-between gap-4 overflow-hidden rounded-md p-3 ${
        chatWith.email === chat.email && 'bg-gray-100'
      }`}
      onClick={() =>
        dispatch(updateChat({ name: chat.name, email: chat.email }))
      }
    >
      <div className='flex items-center justify-center gap-4'>
        <Avatar />
        <div>
          <h3 className='truncate font-bold capitalize'>{chat.name}</h3>
          <p className='col-span-1 text-sm font-semibold text-gray-500'>
            {chat.message}
          </p>
        </div>
      </div>
      <div className='flex flex-col items-start justify-center gap-1'>
        <span className='text-right text-xs font-semibold text-gray-400'>
          11:10 PM
        </span>
      </div>
    </div>
  );
};

export default Chat;
