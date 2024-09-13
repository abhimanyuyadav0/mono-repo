import ComponentColors from '../pages/colors';
import Dashboard from '../pages/dashboard';
import UserPage from '../pages/users';
import Layout from '../layouts';
import About from '../pages/about';
import Contact from '../pages/contact';

const DashboardRoutes = {
  path: '/',
  element: <Layout />,
  children: [
    {
      path: '',
      element: <Dashboard />
    },
    {
      path: 'about',
      element: <About />
    },
    
    {
      path: 'contact',
      element: <Contact />
    },
    {
      path: 'colors',
      element: <ComponentColors />
    },
    {
      path: 'users',
      element: <UserPage />
    },
  ]
};

export default DashboardRoutes;
