import Avatar from '../../components/avatar/Avatar';

type MessageProps = {
  type: string;
};

const Message = ({ type }: MessageProps) => {
  return (
    <div
      className={`flex items-center justify-start gap-4 py-4 ${
        type === 'sender' ? 'flex-row' : 'flex-row-reverse'
      }`}
    >
      <Avatar />
      <div
        className={`flex flex-col justify-center ${
          type === 'sender' ? 'items-start' : 'items-end'
        }`}
      >
        <div className='mb-1 text-xs text-gray-500'>
          <span className='mr-1 font-semibold'>ABHI</span>
          <span>10:00 PM</span>
        </div>
        <h3
          className={`w-fit rounded-3xl px-2 py-1 text-sm font-bold text-gray-900 ${
            type === 'sender'
              ? 'bg-gray-100 text-gray-900'
              : 'bg-sky-500 text-white'
          }`}
        >
          Test
        </h3>
      </div>
    </div>
  );
};

export default Message;
