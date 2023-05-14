import MessageHeader from './MessageHeader';
import Message from './Message';
import MessageInput from './MessageInput';

type MessagesProps = {
  active: boolean;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Messages = ({ active, handleClick }: MessagesProps) => {
  return (
    <div
      className={`z-10 h-screen w-full overflow-y-auto overflow-x-hidden border-r border-gray-300 bg-white scrollbar-hide lg:relative lg:block ${
        active ? 'absolute inset-0 block' : 'relative hidden'
      }`}
    >
      <MessageHeader handleClick={handleClick} />
      <div className='px-6 py-4'>
        <Message type={'sender'} />
        <Message type={'reciver'} />
      </div>
      <MessageInput />
    </div>
  );
};

export default Messages;
