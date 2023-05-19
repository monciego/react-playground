const navigation = {
  pages: [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'About',
      href: '/about',
    },
    {
      name: 'Projects',
      href: '/projects',
    },
  ],
};

const Navbar = (): JSX.Element => {
  return (
    <nav className='flex bg-blue-600 text-white p-6 items-center justify-between'>
      <a href='/'>
        <h3 className='text-base md:text-lg font-medium'>React Playground</h3>
      </a>
      <ul className='flex text-sm lg:text-base items-center space-x-6'>
        {navigation.pages.map((page) => (
          <li key={page.name}>
            <a href={page.href}>{page.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
