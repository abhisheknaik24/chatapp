import Button from '../../components/button/Button';
import { HiUserAdd } from 'react-icons/hi';

type ContactsHeaderProps = {
  setShowModal: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const ContactsHeader = ({ setShowModal }: ContactsHeaderProps) => {
  return (
    <div className='sticky left-0 right-0 top-0 z-10 flex w-full items-start justify-between bg-white px-6 py-4'>
      <h1 className='text-2xl font-bold'>Contacts</h1>
      <Button
        type='button'
        className='cursor-pointer rounded-full bg-gray-100 p-2 text-gray-500 hover:scale-105 hover:text-gray-900'
        onClick={setShowModal}
      >
        <HiUserAdd size={20} />
      </Button>
    </div>
  );
};

export default ContactsHeader;
