import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { Card, CardContent } from '@material-ui/core';

export const CalendarWidget: React.FC = () => {
  const date = new Date();
  return (
    <Card>
      <CardContent>
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
