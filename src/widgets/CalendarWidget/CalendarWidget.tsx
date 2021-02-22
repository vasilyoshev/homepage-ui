import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import calendarWidget from 'stylesheets/widgets/CalendarWidget.module.scss';

export const CalendarWidget: React.FC = () => {
  const date = new Date();
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <div className={calendarWidget.datePicker}>
        <DatePicker
          variant="static"
          value={date}
          onChange={() => null}
        />
      </div>
    </MuiPickersUtilsProvider>
  );
};
