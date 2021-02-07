import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import './CalendarWidget.scss';

export const CalendarWidget: React.FC = () => {
  const date = new Date();
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <div className='date-picker'>
        <DatePicker
          orientation="portrait"
          variant="static"
          value={date}
          onChange={() => null}
        />
      </div>
    </MuiPickersUtilsProvider>
  );
};
        
        
         
