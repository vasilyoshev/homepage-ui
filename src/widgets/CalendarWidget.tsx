import React, { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';


export const CalendarWidget: React.FC = () => {
  const [date, changeDate] = useState<Date | null>(new Date());
  return (
    <>
      <MuiPickersUtilsProvider utils={DateFnsUtils} >
        <DatePicker
          autoOk
          variant="static"
          openTo="year"
          value={date}
          onChange={newDate => changeDate(newDate)}
        />
  
        <DatePicker
          autoOk
          orientation="landscape"
          variant="static"
          openTo="date"
          value={date}
          onChange={newDate => changeDate(newDate)}
        />
      </MuiPickersUtilsProvider>
    </>
  );
};

  
    

   




  
