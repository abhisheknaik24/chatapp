import { useEffect, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import Message from './Message';
import MessageInput from './MessageInput';
import { useLocalStorage } from 'usehooks-ts';
import MessageHeader from './MessageHeader';

type MessageType = {
  _id: string;
  content: string;
  sender: {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
  };
  receiver: {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
  };
  createdAt: Date;
};

const Messages: React.FC = () => {
  const [token, setToken] = useLocalStorage<string | undefined>(
    'token',
    undefined
  );

  const chatWith = useSelector((state: RootState) => state.chat.chatWith);

  const [messages, setMessages] = useState<MessageType[]>([]);

  const [content, setContent] = useState<string>('');

  const fetchMessages = useCallback(async () => {
    if (chatWith.email) {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API}/api/messages/getMessages`,
          {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: chatWith.email }),
          }
        );

        const data = await res.json();

        if (data.success) {
          setMessages(data.data.messages);
        }
      } catch (error) {
        console.error(error);
      }
    }
  }, [chatWith, token]);

  useEffect(() => {
    fetchMessages();
  }, [chatWith, fetchMessages, token]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (chatWith.email && content) {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API}/api/messages/sendMessage`,
          {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: chatWith, content: content }),
          }
        );

        const data = await res.json();

        if (data.success) {
          setContent('');
          fetchMessages();
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <>
      {chatWith.email && chatWith.name ? (
        <div
          className={`block h-screen w-full overflow-y-auto overflow-x-hidden border-r border-gray-300 bg-white scrollbar-hide lg:relative lg:block ${
            chatWith && 'absolute inset-0 z-10'
          }`}
        >
          <MessageHeader />
          <div className='h-fit min-h-screen px-6 py-4'>
            {messages &&
              messages.map((message) => (
                <Message key={message._id} message={message} />
              ))}
          </div>
          <MessageInput
            value={content}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </div>
      ) : (
        <div className='w-full'></div>
      )}
    </>
  );
};

export default Messages;
