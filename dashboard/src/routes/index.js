import { useRoutes } from 'react-router-dom';
import DashboardRoutes from './dashboardRoutes';

export default function AppRouter() {
  return useRoutes([DashboardRoutes]);
}
