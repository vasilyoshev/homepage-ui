import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from 'store';
import { Card, CardContent, CardActions, Button, Avatar } from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import styles from './Dashboard.module.scss';

export const Dashboard: React.FC = () => {
  const date = new Date().toDateString();
  const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
  const { username } = useAppSelector((state) => state.user);

  return (
    <Card className={styles.dashboardCard} elevation={6}>
      <CardContent>
        <Avatar className={styles.avatar} style={{ width: '70px', height: '70px' }} alt="avatar" />
        <h2>{`Welcome, ${username}.`}</h2>
        <h5>{date}</h5>
        <h5>{time}</h5>
        <CardActions>
          <Button variant="contained" color="primary">
            <NavLink to="/" activeClassName="selected">
          Go to Widgets
            </NavLink>
          </Button>
          <Button variant="contained" color="default" startIcon={<CloudUploadIcon />}>
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

