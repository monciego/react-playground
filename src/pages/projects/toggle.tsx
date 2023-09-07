type ToggleProps = {
  toggle: boolean;
  handleToggle: () => void;
};

export const Toggle = ({ toggle, handleToggle }: ToggleProps): JSX.Element => {
  return (
    <div>
      <label className='relative inline-flex items-center cursor-pointer'>
        <input
          type='checkbox'
          onChange={handleToggle}
          checked={toggle ? true : false}
          className='sr-only peer'
        />
        <div className="w-11 h-6  peer-focus:outline-none peer-focus:ring-4  peer-focus:ring-blue-800 rounded-full peer bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all border-gray-600 peer-checked:bg-blue-600"></div>
        <span className='ml-3 text-sm font-medium  text-gray-800'>
          Toggle me
        </span>
      </label>
    </div>
  );
};
