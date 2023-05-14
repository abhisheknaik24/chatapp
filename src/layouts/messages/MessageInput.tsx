import { MdSend } from 'react-icons/md';

const MessageInput = () => {
  return (
    <div className='absolute bottom-0 left-0 right-0 flex items-center justify-between gap-4 px-6 py-4'>
      <input
        type='text'
        className='w-full rounded-3xl bg-gray-100 px-4 py-2 text-gray-700 outline-none focus:border focus:border-gray-300'
        placeholder='Write a message'
      />
      <button className='cursor-pointer rounded-full bg-sky-500 p-2 text-white hover:bg-sky-700'>
        <MdSend size={20} />
      </button>
    </div>
  );
};

export default MessageInput;
