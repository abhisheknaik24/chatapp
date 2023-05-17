import { MdSend } from 'react-icons/md';
import Button from '../../components/button/Button';
import Input from '../../components/input/Input';

type MessageInputProps = {
  value: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const MessageInput = ({
  value,
  handleChange,
  handleSubmit,
}: MessageInputProps) => {
  return (
    <div className='sticky bottom-0 left-0 right-0 z-10 flex items-center justify-between gap-4 bg-white px-6 py-4'>
      <Input
        type='text'
        className='w-full rounded-3xl bg-gray-100 px-4 py-2 text-gray-700 outline-none focus:border focus:border-gray-300'
        id=''
        name=''
        value={value}
        placeholder='Write a message'
        onChange={handleChange}
      />
      <Button
        type='button'
        className='cursor-pointer rounded-full bg-sky-500 p-2 text-white hover:bg-sky-700'
        onClick={handleSubmit}
      >
        <MdSend size={20} />
      </Button>
    </div>
  );
};

export default MessageInput;
