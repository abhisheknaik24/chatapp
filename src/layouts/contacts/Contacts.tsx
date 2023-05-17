import { useEffect, useState, useCallback } from 'react';
import Contact from './Contact';
import ContactsHeader from './ContactsHeader';
import { useLocalStorage } from 'usehooks-ts';
import Modal from '../../components/modal/Modal';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';

type ContactsTypes = {
  _id: string;
  name: string;
  email: string;
};

const Contacts = () => {
  const [token, setToken] = useLocalStorage<string | undefined>(
    'token',
    undefined
  );

  const [contacts, setContacts] = useState<ContactsTypes[]>([]);

  const [showModal, setShowModal] = useState<boolean>(false);

  const [contactEmail, setContactEmail] = useState<string | null>(null);

  const fetchContacts = useCallback(async () => {
    const res = await fetch(
      `${import.meta.env.VITE_API}/api/contacts/getContacts`,
      {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );

    const data = await res.json();

    if (data.success) {
      setContacts(data.data.contacts);
    }
  }, [token]);

  useEffect(() => {
    fetchContacts();
  }, [fetchContacts, token]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContactEmail(e.target.value);
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (contactEmail) {
      const res = await fetch(
        `${import.meta.env.VITE_API}/api/contacts/addContact`,
        {
          method: 'POST',
          mode: 'cors',
          cache: 'no-cache',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: contactEmail }),
        }
      );

      const data = await res.json();

      if (data.success) {
        setContactEmail(null);
        fetchContacts();
        setShowModal(false);
      }
    }
  };

  return (
    <div className='h-screen w-full overflow-y-auto overflow-x-hidden border-r border-gray-300 scrollbar-hide lg:w-1/3'>
      <ContactsHeader setShowModal={() => setShowModal(!showModal)} />
      <div className='flex flex-col items-start justify-center gap-1 px-6 py-4'>
        {contacts &&
          contacts.map((contact) => (
            <Contact key={contact._id} contact={contact} />
          ))}
      </div>
      {showModal && (
        <Modal setShowModal={() => setShowModal(false)}>
          <Input
            label='Email Address'
            type='email'
            className='mb-6 mt-2 w-full rounded-md border-2 border-gray-200 px-3 py-1 font-semibold outline-none hover:border-sky-500 focus:border-sky-500'
            id='email'
            name='email'
            onChange={(e) => handleChange(e)}
          />
          <Button
            type='button'
            className='w-full cursor-pointer rounded-md bg-sky-500 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-600'
            onClick={(e) => handleSubmit(e)}
          >
            Save
          </Button>
        </Modal>
      )}
    </div>
  );
};

export default Contacts;
