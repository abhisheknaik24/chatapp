import Input from '../../components/input/Input';
import Button from '../../components/button/Button';

type AuthFormProps = {
  children: React.ReactNode;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  inputs: {
    label: string;
    type: string;
    id: string;
    name: string;
  }[];
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const AuthForm = ({
  children,
  handleSubmit,
  inputs,
  handleChange,
}: AuthFormProps) => {
  return (
    <form onSubmit={handleSubmit}>
      {inputs &&
        inputs.map((i, index) => (
          <div className='mb-6' key={index}>
            <Input
              label={i.label}
              type={i.type}
              className='mt-2 w-full rounded-md border-2 border-gray-200 px-3 py-1 font-semibold outline-none hover:border-sky-500 focus:border-sky-500'
              id={i.id}
              name={i.name}
              onChange={handleChange}
            />
          </div>
        ))}
      <div className='mb-6'>
        <Button
          type='submit'
          className='w-full cursor-pointer rounded-md bg-sky-500 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-600'
        >
          {children}
        </Button>
      </div>
    </form>
  );
};

export default AuthForm;
