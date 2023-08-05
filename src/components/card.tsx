type CardProps = {
  title?: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
  fallback?: boolean;
};

const Card = ({
  title,
  description,
  children,
  fallback = false,
  className,
}: CardProps): JSX.Element => {
  return (
    <div
      className={`block p-6 border rounded  shadow text-[#fff] bg-[#131313] border-gray-700  transition-all ${className}`}
    >
      {fallback && (
        <>
          <h5 className='mb-2 text-2xl font-bold tracking-tight text-white'>
            {title ? title : 'Title'}
          </h5>

          <p className='font-normal text-gray-400'>
            {description
              ? description
              : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis enim necessitatibus consectetur temporibus. Praesentium, fugiat!'}
          </p>
        </>
      )}
      {children}
    </div>
  );
};

export default Card;
