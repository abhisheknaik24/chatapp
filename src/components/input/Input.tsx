type InputProps = {
  label: string;
  type: React.HTMLInputTypeAttribute | undefined;
  id: string;
  name: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ label, type, id, name, handleChange }: InputProps) => {
  return (
    <>
      <label className='font-bold' htmlFor={id}>
        {label}
      </label>
      <input
        type={type}
        className='mt-2 w-full rounded-md border-2 border-gray-200 px-3 py-1 font-semibold outline-none hover:border-sky-500 focus:border-sky-500'
        id={id}
        name={name}
        onChange={handleChange}
      />
    </>
  );
};

export default Input;
