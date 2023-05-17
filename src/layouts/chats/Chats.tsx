import { useState, useEffect, useCallback } from 'react';
import ChatsHeader from './ChatsHeader';
import Chat from './Chat';
import { useLocalStorage } from 'usehooks-ts';

type ChatsTypes = {
  _id: string;
  name: string;
  email: string;
  message: string;
};

const Chats = () => {
  const [token, setToken] = useLocalStorage<string | undefined>(
    'token',
    undefined
  );

  const [chats, setChats] = useState<ChatsTypes[]>([]);

  const [showModal, setShowModal] = useState<boolean>(false);

  const fetchChats = useCallback(async () => {
    const res = await fetch(`${import.meta.env.VITE_API}/api/chats/getChats`, {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();

    if (data.success) {
      setChats(data.data.chats);
    }
  }, [token]);

  useEffect(() => {
    fetchChats();
  }, [fetchChats, token]);

  return (
    <div className='h-screen w-full overflow-y-auto overflow-x-hidden border-r border-gray-300 scrollbar-hide lg:w-1/3'>
      <ChatsHeader />
      <div className='flex flex-col items-start justify-center gap-1 px-6 py-4'>
        {chats && chats.map((chat) => <Chat key={chat._id} chat={chat} />)}
      </div>
    </div>
  );
};

export default Chats;
