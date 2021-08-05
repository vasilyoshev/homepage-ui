import React from 'react';
import { useAppSelector } from 'store';
import { Card, CardContent, CardActions, Button, Avatar } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import styles from './Dashboard.module.scss';

export const Dashboard: React.FC = () => {
  const date = new Date().toDateString();
  const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const { username } = useAppSelector((state) => state.user);

  return (
    <Card className={styles.dashboardCard}>
      <CardContent>
        <Avatar style={{ width: '70px', height: '70px', margin: 'auto' }} alt="avatar" />
        <h3 className={styles.userText}>
          {`Welcome, ${username}.`}
        </h3>
        <h5 className={styles.timeText}>
          {date}
        </h5>
        <h5 className={styles.timeText}>
          {time}
        </h5>
      </CardContent>
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
    </Card>
  );
};
