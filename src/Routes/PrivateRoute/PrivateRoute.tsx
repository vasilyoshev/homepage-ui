import { Route, Redirect, RouteProps } from 'react-router-dom';
import { useAppSelector } from 'store';

export const PrivateRoute: React.FC<RouteProps> = ({ ...rest }) => {
  const { isLoggedIn } = useAppSelector((state) => state.user);
  if (!isLoggedIn) {
    return <Redirect to='/login' />;
  }
  return <Route {...rest } />;
};
