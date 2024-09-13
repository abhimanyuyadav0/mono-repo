import Layout from '../layouts';
import Products from '../pages/products';

const DashboardRoutes = {
  path: '/',
  element: <Layout />,
  children: [
    {
      path: '',
      element: <Products />
    },
  ]
};

export default DashboardRoutes;
