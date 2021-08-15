import React from 'react';
import Alert from '@material-ui/lab/Alert';
import { WeatherWidgetAlertMessageProps } from 'interfaces';

export const WeatherWidgetAlertMessage: React.FC<WeatherWidgetAlertMessageProps> = ({ message, severity }) => {
  return (
    <Alert severity={severity}>{message}</Alert>
  );
};
