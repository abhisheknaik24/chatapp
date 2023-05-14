import Input from '../../components/input/Input';
import Button from '../../components/button/Button';

type AuthFormProps = {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  inputs: {
    label: string;
    type: string;
    id: string;
    name: string;
  }[];
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  buttonName: string;
};

const AuthForm = ({
  handleSubmit,
  inputs,
  handleChange,
  buttonName,
}: AuthFormProps) => {
  return (
    <form onSubmit={handleSubmit}>
      {inputs &&
        inputs.map((i, index) => (
          <div className='mb-6' key={index}>
            <Input
              label={i.label}
              type={i.type}
              id={i.id}
              name={i.name}
              handleChange={handleChange}
            />
          </div>
        ))}
      <div className='mb-6'>
        <Button type='submit' name={buttonName} width='w-full' />
      </div>
    </form>
  );
};

export default AuthForm;
