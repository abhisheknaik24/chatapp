import Avatar from '../avatar/Avatar';

type CardProps = {
  active?: boolean;
  handleClick: (e: React.MouseEvent<HTMLDivElement>) => void;
};

const Card = ({ active, handleClick }: CardProps) => {
  return (
    <div
      className={`flex w-full cursor-pointer items-center justify-between gap-1 overflow-hidden rounded-md p-3 ${
        active && 'bg-gray-100'
      }`}
      onClick={handleClick}
    >
      <div className='w-1/4'>
        <Avatar />
      </div>
      <div className='flex w-3/4 flex-col items-start justify-center gap-1'>
        <div className='flex w-full items-center justify-between gap-1 overflow-hidden'>
          <h3 className='w-3/5 truncate font-bold'>ABHI</h3>
          <span className='w-2/5 text-right text-xs font-semibold text-gray-400'>
            11:10 PM
          </span>
        </div>
        <p className='col-span-1 text-sm font-semibold text-gray-500'>Hello</p>
      </div>
    </div>
  );
};

export default Card;
