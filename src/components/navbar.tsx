import { Link } from 'react-router-dom';

const navigation = {
  pages: [
    {
      name: 'About',
      href: 'about',
    },
    {
      name: 'Projects',
      href: 'projects',
    },
  ],
};

const Navbar = (): JSX.Element => {
  return (
    <nav className='flex text-white p-6 items-center justify-between'>
      <Link to={`/`}>
        <h3 className='text-lg sm:text-xl md:text-2xl font-syncopate uppercase font-medium'>
          TRP
        </h3>
      </Link>
      <ul className='flex text-sm lg:text-base items-center space-x-6'>
        {navigation.pages.map((page) => (
          <li key={page.name}>
            <Link className='tracking-wide text-md sm:text-lg' to={page.href}>
              {page.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
