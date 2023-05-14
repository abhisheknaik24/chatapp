import { MdOutlineGroupAdd } from 'react-icons/md';

const ChatsHeader = () => {
  return (
    <div className='sticky left-0 right-0 top-0 z-10 flex w-full items-start justify-between bg-white px-6 py-4'>
      <h1 className='text-2xl font-bold'>Chats</h1>
      <button className='cursor-pointer rounded-full bg-gray-100 p-2 text-gray-500'>
        <MdOutlineGroupAdd size={20} />
      </button>
    </div>
  );
};

export default ChatsHeader;
