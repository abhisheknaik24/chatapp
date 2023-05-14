type AuthFooterProps = {
  title: string;
  buttonName: string;
  setVariant: () => void;
};

const AuthFooter = ({ title, buttonName, setVariant }: AuthFooterProps) => {
  return (
    <div className='text-center text-sm font-semibold text-gray-500'>
      <span className='mr-1'>{title}</span>
      <button className='underline outline-none' onClick={setVariant}>
        {buttonName}
      </button>
    </div>
  );
};

export default AuthFooter;
