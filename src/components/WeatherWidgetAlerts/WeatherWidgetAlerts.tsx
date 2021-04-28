import React from 'react';
import Alert from '@material-ui/lab/Alert';
import { AlertProps } from 'interfaces';

export const WeatherWidgetWarningAlert: React.FC<AlertProps> = ({ message }) => {
  return (
    message ? <Alert severity="warning">{message}</Alert> : null
  );
};

export const WeatherWidgetErrorAlert: React.FC<AlertProps> = ({ message }) => {
  return (
    message ? <Alert severity="error">{message}</Alert> : null
  );
};
