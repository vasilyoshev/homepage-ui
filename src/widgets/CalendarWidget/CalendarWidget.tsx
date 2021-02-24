import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import styles from './CalendarWidget.module.scss';

export const CalendarWidget: React.FC = () => {
  const date = new Date();
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <div className={styles['date-picker']}>
        <DatePicker
          variant="static"
          value={date}
          onChange={() => null}
        />
      </div>
    </MuiPickersUtilsProvider>
  );
};
