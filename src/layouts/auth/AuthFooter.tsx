import Button from '../../components/button/Button';

type AuthFooterProps = {
  children: React.ReactNode;
  title: string;
  setVariant: () => void;
};

const AuthFooter = ({ children, title, setVariant }: AuthFooterProps) => {
  return (
    <div className='text-center text-sm font-semibold text-gray-500'>
      <span className='mr-1'>{title}</span>
      <Button
        type='button'
        className='underline outline-none'
        onClick={setVariant}
      >
        {children}
      </Button>
    </div>
  );
};

export default AuthFooter;
