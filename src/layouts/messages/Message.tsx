import jwt_decode from 'jwt-decode';
import Avatar from '../../components/avatar/Avatar';
import { useEffect, useState } from 'react';
import { useLocalStorage } from 'usehooks-ts';

type MessageProps = {
  message: {
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
};

const Message = ({ message }: MessageProps) => {
  const [token, setToken] = useLocalStorage<string | undefined>(
    'token',
    undefined
  );
  const [decodedToken, setDecodedToken] = useState<any>({
    data: { email: '' },
  });

  useEffect(() => {
    if (token) {
      setDecodedToken(jwt_decode(token));
    }
  }, [token]);

  const isCurrentUser = message.sender.email !== decodedToken.data.email;

  const createdAt = new Date(message.createdAt);

  return (
    <div
      className={`flex items-center justify-${
        isCurrentUser ? 'start' : 'end'
      } gap-4 py-4`}
    >
      <Avatar />
      <div
        className={`flex flex-col justify-center items-${
          isCurrentUser ? 'start' : 'end'
        }`}
      >
        <div className='mb-1 text-xs text-gray-500'>
          <span className='mr-1 font-semibold capitalize'>
            {message.sender.firstName} {message.sender.lastName}
          </span>
          <span>
            {createdAt instanceof Date &&
              `${createdAt.getHours()}:${createdAt.getMinutes()}:${createdAt.getSeconds()}`}
          </span>
        </div>
        <h3
          className={`w-fit rounded-3xl px-2 py-1 text-sm font-bold text-gray-900 ${
            isCurrentUser
              ? 'bg-gray-100 text-gray-900'
              : 'bg-sky-500 text-white'
          }`}
        >
          {message.content}
        </h3>
      </div>
    </div>
  );
};

export default Message;
