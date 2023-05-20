type ButtonProps = {
  children?: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset' | undefined;
  className?: string;
};

const Button = ({
  children,
  onClick,
  type = 'button',
  className,
}: ButtonProps): JSX.Element => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${className} flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700`}
    >
      {children}
    </button>
  );
};

export default Button;
