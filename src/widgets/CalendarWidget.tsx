import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';

export const CalendarWidget: React.FC = () => {
  const date = new Date();
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DatePicker
        orientation="landscape"
        variant="static"
        value={date}
        onChange={() => null}
      />
    </MuiPickersUtilsProvider>
  );
};
