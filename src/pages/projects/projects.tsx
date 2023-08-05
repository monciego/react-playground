import { Link } from 'react-router-dom';
import Card from '../../components/card';
import { projectsData } from './index';
import { v4 as uuidv4 } from 'uuid';

export const Projects = (): JSX.Element => {
  return (
    <div className='grid mx-4 md:mx-10 grid-cols-1 gap-5 mt-4 sm:grid-cols-2 xl:grid-cols-3'>
      {projectsData.map((project) => (
        <Link to={project.href} key={uuidv4()}>
          <Card className='hover:transform hover:scale-[1.03]'>
            <h3 className='tracking-wide text-center font-paytoneOne'>
              {project.title}
            </h3>
          </Card>
        </Link>
      ))}
    </div>
  );
};
