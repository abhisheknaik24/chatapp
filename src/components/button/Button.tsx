type ButtonProps = {
  type: 'button' | 'submit' | 'reset' | undefined;
  name: string;
  width: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({ type, name, width, onClick }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`${width} cursor-pointer rounded-md bg-sky-500 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-600`}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default Button;
