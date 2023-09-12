import Card from './card';

type NotesProps = {
  projectTitle: string;
  children?: React.ReactNode;
};

const Notes = ({ projectTitle, children }: NotesProps): JSX.Element => {
  return (
    <Card className='my-6'>
      <h2 className='font-bold mb-2'> {projectTitle}</h2>
      {children}
    </Card>
  );
};

export default Notes;
