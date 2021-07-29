import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

export const Header: React.FC = () => {
  const logout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" className={styles.title}>
          <NavLink to="/" activeClassName="selected">
            Homepage Widgets
          </NavLink>
        </Typography>
        <Button color="inherit">
          <NavLink to="/signup" activeClassName="selected">
            SIGNUP
          </NavLink>
        </Button>
        <Button color="inherit">
          <NavLink to="/login" activeClassName="selected">
            LOGIN
          </NavLink>
        </Button>
        <Button color="inherit">
          <NavLink onClick={logout} to="/logout" activeClassName="selected">
            LOGOUT
          </NavLink>
        </Button>
      </Toolbar>
    </AppBar>
  );
};
