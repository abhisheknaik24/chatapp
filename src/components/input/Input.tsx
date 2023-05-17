type InputProps = {
  label?: string;
  type: React.HTMLInputTypeAttribute | undefined;
  className: string;
  id: string;
  name: string;
  value?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({
  label,
  type,
  className,
  id,
  name,
  value,
  placeholder,
  onChange,
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
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </>
  );
};

export default Input;
