import React from 'react';
import Alert from '@material-ui/lab/Alert';
import { WeatherWidgetAlertMessageProps } from 'interfaces';
import styles from './WeatherWidgetAlertMessage.module.scss';

export const WeatherWidgetAlertMessage: React.FC<WeatherWidgetAlertMessageProps> = ({ message, severity }) => {
  return (
    <Alert className={styles.alertMsg} severity={severity}>{message}</Alert>
  );
};
