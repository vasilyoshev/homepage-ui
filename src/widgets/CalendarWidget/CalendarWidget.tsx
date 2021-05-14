import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { Card, CardContent } from '@material-ui/core';
import styles from './CalendarWidget.module.scss';

export const CalendarWidget: React.FC = () => {
  const date = new Date();
  return (
    <Card>
      <CardContent className={styles.calendarCard}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DatePicker
            variant="static"
            value={date}
            onChange={() => null}
          />
        </MuiPickersUtilsProvider>
      </CardContent>
    </Card>
  );
};
