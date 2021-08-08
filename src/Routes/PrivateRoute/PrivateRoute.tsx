import { Route, Redirect, RouteProps } from 'react-router-dom';

export const PrivateRoute: React.FC<RouteProps> = ({ ...rest }) => {
  const isAuthed = !!localStorage.getItem('token');
  if (!isAuthed) {
    return <Redirect to='/login' />;
  }
  return <Route {...rest } />;
};
