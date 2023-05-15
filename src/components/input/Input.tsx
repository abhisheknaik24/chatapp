type InputProps = {
  label?: string;
  type: React.HTMLInputTypeAttribute | undefined;
  className: string;
  id: string;
  name: string;
  placeholder?: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({
  label,
  type,
  className,
  id,
  name,
  placeholder,
  handleChange,
}: InputProps) => {
  return (
    <>
      {label && (
        <label className='font-bold' htmlFor={id}>
          {label}
        </label>
      )}
      <input
        type={type}
        className={className}
        id={id}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </>
  );
};

export default Input;
