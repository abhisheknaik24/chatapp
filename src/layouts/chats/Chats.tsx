import Card from '../../components/card/Card';
import ChatsHeader from './ChatsHeader';

type ChatsProps = {
  handleClick: (e: React.MouseEvent<HTMLDivElement>) => void;
};

const Chats = ({ handleClick }: ChatsProps) => {
  return (
    <div className='h-screen w-full overflow-y-auto overflow-x-hidden border-r border-gray-300 scrollbar-hide lg:w-1/3'>
      <ChatsHeader />
      <div className='flex flex-col items-start justify-center gap-1 px-6 py-4'>
        <Card active={true} handleClick={handleClick} />
        <Card handleClick={handleClick} />
        <Card handleClick={handleClick} />
        <Card handleClick={handleClick} />
        <Card handleClick={handleClick} />
        <Card handleClick={handleClick} />
        <Card handleClick={handleClick} />
        <Card handleClick={handleClick} />
        <Card handleClick={handleClick} />
      </div>
    </div>
  );
};

export default Chats;
