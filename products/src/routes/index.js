import { useRoutes } from 'react-router-dom';
import PagesRoutes from './pages';

export default function AppRouter() {
  return useRoutes([PagesRoutes]);
}
