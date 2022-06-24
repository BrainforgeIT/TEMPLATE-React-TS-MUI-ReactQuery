import { Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/dashboard/Dashboard';
import Login from '../pages/login/Login';
import { routes } from '../static/routes';
import { ProtectedRoute } from './ProtectedRoute';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path={routes.login} element={<Login />} />
      <Route element={<ProtectedRoute />}>
        <Route path={routes.dashboard} element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
