import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

export const Header: React.FC = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton edge="start" color="inherit">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={styles['title']}>
          <NavLink to="/" activeClassName="selected">
            Homepage Widgets
          </NavLink>
        </Typography>
        <Button color="inherit">
          <NavLink to="/about" activeClassName="selected">
            About
          </NavLink>
        </Button>
      </Toolbar>
    </AppBar>
  );
};
