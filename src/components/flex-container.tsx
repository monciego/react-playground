type ContainerProps = {
  children?: React.ReactNode;
  className?: string;
};

/* todo: create a container and flex container is just a variant */

const FlexContainer = ({
  children,
  className,
}: ContainerProps): JSX.Element => {
  return (
    <div className={`${className}  flex items-center justify-center `}>
      {children}
    </div>
  );
};

export default FlexContainer;
