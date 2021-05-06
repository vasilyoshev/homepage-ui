import React from 'react';
import Alert from '@material-ui/lab/Alert';
import { AlertProps } from 'interfaces';

export const WeatherWidgetWarningAlert: React.FC<AlertProps> = ({ message }) => {
  return (
    <Alert severity='warning'>{message}</Alert>
  );
};
