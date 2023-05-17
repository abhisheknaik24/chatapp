import { useState } from 'react';
import AuthForm from './AuthForm';
import AuthFooter from './AuthFooter';
import { useLocalStorage } from 'usehooks-ts';

type UserTypes = {
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
};

type InputsTypes = {
  label: string;
  type: string;
  id: string;
  name: string;
};

const Auth = () => {
  const [token, setToken] = useLocalStorage<string | undefined>(
    'token',
    undefined
  );

  const [user, setUser] = useState<UserTypes>({ email: '', password: '' });

  const [variant, setVariant] = useState<string>('login');

  const [loginInputs, setLoginInputs] = useState<InputsTypes[]>([
    { label: 'Email Address', type: 'email', id: 'email', name: 'email' },
    { label: 'Password', type: 'password', id: 'password', name: 'password' },
  ]);

  const [registerInputs, setRegisterInputs] = useState<InputsTypes[]>([
    { label: 'First Name', type: 'text', id: 'firstName', name: 'firstName' },
    { label: 'Last Name', type: 'text', id: 'lastName', name: 'lastName' },
    { label: 'Email Address', type: 'email', id: 'email', name: 'email' },
    { label: 'Password', type: 'password', id: 'password', name: 'password' },
  ]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let url: string;

    if (variant === 'register') {
      url = `${import.meta.env.VITE_API}/api/auth/register`;
    } else {
      url = `${import.meta.env.VITE_API}/api/auth/login`;
    }

    const res = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    const data = await res.json();

    if (data.success) {
      if (variant === 'register') {
        setVariant('login');
      } else {
        setToken(data.data.token);
      }
    }
  };

  return (
    <div className='flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-gray-100 p-6'>
      <div className='mb-6'>
        {variant === 'register' ? (
          <h1 className='text-4xl font-bold'>Sign up to your account</h1>
        ) : (
          <h1 className='text-4xl font-bold'>Sign in to your account</h1>
        )}
      </div>
      <div className='w-[28rem] rounded-md bg-white p-8 shadow-md'>
        {variant === 'register' ? (
          <AuthForm
            handleSubmit={handleSubmit}
            inputs={registerInputs}
            handleChange={handleChange}
          >
            Sign up
          </AuthForm>
        ) : (
          <AuthForm
            handleSubmit={handleSubmit}
            inputs={loginInputs}
            handleChange={handleChange}
          >
            Sign in
          </AuthForm>
        )}
        {variant === 'register' ? (
          <AuthFooter
            title='Already on ChatApp?'
            setVariant={() => setVariant('login')}
          >
            Sign in here
          </AuthFooter>
        ) : (
          <AuthFooter
            title='New to ChatApp?'
            setVariant={() => setVariant('register')}
          >
            Create an account
          </AuthFooter>
        )}
      </div>
    </div>
  );
};

export default Auth;
