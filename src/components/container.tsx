type ContainerProps = {
  children?: React.ReactNode;
};

const Container = ({ children }: ContainerProps): JSX.Element => {
  return <div className='mx-4 md:mx-6'>{children}</div>;
};

export default Container;
