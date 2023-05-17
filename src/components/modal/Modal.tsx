import { IoCloseOutline } from 'react-icons/io5';
import Button from '../button/Button';

type ModalProps = {
  children: React.ReactNode;
  setShowModal: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Modal = ({ children, setShowModal }: ModalProps) => {
  return (
    <div className='relative z-50'>
      <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
      <div className='fixed inset-0 z-10 overflow-y-auto'>
        <div className='flex min-h-screen items-center justify-center p-4'>
          <div className='relative w-full transform overflow-hidden rounded-md bg-white p-6 shadow-xl transition-all lg:w-1/2'>
            <div className='flex items-center justify-end'>
              <Button
                type='button'
                className='text-gray-900'
                onClick={setShowModal}
              >
                <IoCloseOutline size={25} />
              </Button>
            </div>
            <div className='flex flex-col items-start justify-start'>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
