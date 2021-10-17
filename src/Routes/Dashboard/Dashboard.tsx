import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardActions, Button, Avatar } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import styles from './Dashboard.module.scss';

export const Dashboard: React.FC = () => {
  const [username, setUsername] = useState('');
  const date = new Date().toDateString();
  const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setUsername(user);
    }
  }, []);

  return (
    <Card className={styles.dashboardCard} elevation={6}>
      <CardContent>
        <Avatar className={styles.avatar} style={{ width: '70px', height: '70px' }} alt="avatar" />
        <h2>{`Welcome, ${username}.`}</h2>
        <h5>{date}</h5>
        <h5>{time}</h5>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
          >
            <NavLink to="/" activeClassName="selected">
          Go to Widgets
            </NavLink>
          </Button>
          <Button
            variant="contained"
            color="default"
            startIcon={<CloudUploadIcon />}
          >
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

