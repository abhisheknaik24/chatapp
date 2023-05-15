import { AiOutlineGoogle } from 'react-icons/ai';
import Button from '../../components/button/Button';

const SocialAuth = () => {
  return (
    <>
      <div className='relative mb-6'>
        <div className='absolute inset-0 flex items-center'>
          <div className='w-full border-t border-gray-300' />
        </div>
        <div className='relative flex justify-center text-sm'>
          <span className='bg-white px-2 text-gray-500'>Or continue with</span>
        </div>
      </div>
      <div className='mb-6'>
        <Button
          type='button'
          className='flex w-full cursor-pointer items-center justify-center rounded-md py-2 text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-100 focus:outline-offset-0'
        >
          <AiOutlineGoogle size={25} />
        </Button>
      </div>
    </>
  );
};

export default SocialAuth;
