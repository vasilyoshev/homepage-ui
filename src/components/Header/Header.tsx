import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { validateUserByToken } from 'slices';
import { AppBar, Button, Toolbar, Typography, IconButton } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from 'store';
import styles from './Header.module.scss';

export const Header: React.FC = () => {
  const { isLoggedIn } = useAppSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(validateUserByToken({ token: localStorage.getItem('token') }));
  }, [dispatch]);

  const logout = () => {
    localStorage.clear();
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
        {isLoggedIn ? (
          <>
            <IconButton  color="inherit">
              <NavLink to='/dashboard' activeClassName="selected">
                <AccountCircle />
              </NavLink>
            </IconButton>
            <Button color="inherit">
              <NavLink onClick={logout} to="/logout" activeClassName="selected">
            LOGOUT
              </NavLink>
            </Button>
          </>
        ):(
          <>
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
          </>
        )}

      </Toolbar>
    </AppBar>
  );
};
