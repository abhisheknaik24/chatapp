import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../../redux/store';
import Avatar from '../../components/avatar/Avatar';
import { updateChat } from '../../redux/chat/chatSlice';

type ContactProps = {
  contact: {
    _id: string;
    name: string;
    email: string;
  };
};

const Contact = ({ contact }: ContactProps) => {
  const chatWith = useSelector((state: RootState) => state.chat.chatWith);

  const dispatch = useDispatch();

  return (
    <div
      className={`flex w-full cursor-pointer items-center justify-start gap-4 overflow-hidden rounded-md p-3 ${
        chatWith.email === contact.email && 'bg-gray-100'
      }`}
      onClick={() =>
        dispatch(updateChat({ name: contact.name, email: contact.email }))
      }
    >
      <Avatar />
      <h3 className='truncate font-bold capitalize text-gray-900'>
        {contact.name}
      </h3>
    </div>
  );
};

export default Contact;
