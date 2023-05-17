type ButtonProps = {
  children: React.ReactNode;
  type: 'button' | 'submit' | 'reset' | undefined;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({ children, type, className, onClick }: ButtonProps) => {
  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
