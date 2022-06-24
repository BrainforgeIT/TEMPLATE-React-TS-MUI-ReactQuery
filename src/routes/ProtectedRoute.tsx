import { Navigate, Outlet } from 'react-router-dom';
import { routes } from '../static/routes';

export const ProtectedRoute: React.FC = () => {
  // TODO: replace with not authenticated condition

  if (routes.login !== routes.login) {
    return <Navigate to={routes.login} replace />;
  }
  return <Outlet />;
};
