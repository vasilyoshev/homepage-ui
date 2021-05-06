import React from 'react';
import Alert from '@material-ui/lab/Alert';
import { AlertProps } from 'interfaces';

export const WeatherWidgetErrorAlert: React.FC<AlertProps> = ({ message }) => {
  return (
    <Alert severity='error'>{message}</Alert>
  );
};
