import { Route, Redirect, RouteProps } from 'react-router-dom';

export const PrivateRoute: React.FC<RouteProps> = ({ ...rest }) => {
  const isAuthorized = !!localStorage.getItem('token');
  if (!isAuthorized) {
    return <Redirect to='/login' />;
  }
  return <Route {...rest } />;
};
