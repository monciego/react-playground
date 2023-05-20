type CardProps = {
  title?: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
  fallback?: boolean;
};

/* TODO: Add a variant in this card (it can be an `a tag` or a `div`) */

const Card = ({
  title,
  description,
  children,
  fallback = false,
  className,
}: CardProps): JSX.Element => {
  return (
    <a
      href='#'
      className={`block p-6 border rounded text-white shadow bg-gray-800 border-gray-700 hover:bg-gray-700 ${className}`}
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
    </a>
  );
};

export default Card;
