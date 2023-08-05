import { Outlet } from 'react-router-dom';
import Navbar from './navbar';

export const Layout = (): JSX.Element => {
  return (
    <div>
      <Navbar />
      {<Outlet />}
    </div>
  );
};
