import { IconType } from 'react-icons';

type PanelIconProps = {
  icon: IconType;
  active?: boolean;
};

const PanelIcon = ({ icon, active }: PanelIconProps) => {
  const Icon = icon as React.ComponentType<{ size: number }>;

  return (
    <button
      className={`flex cursor-pointer items-center justify-center rounded-md p-3 text-gray-500 hover:text-gray-900 lg:mb-3 ${
        active && 'bg-gray-100'
      }`}
    >
      <Icon size={25} />
    </button>
  );
};

export default PanelIcon;
