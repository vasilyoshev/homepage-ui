import React from 'react';
import { useSelector } from 'react-redux';
import { AddWidgetFab } from 'components';
import { CalendarWidget } from 'widgets';
import { selectIsCalendarWidgetActive } from 'slices';
import './Home.scss';

export const Home: React.FC = () => {
  const isCalendarWidgetActive = useSelector(selectIsCalendarWidgetActive);

  return (
    <>
      <AddWidgetFab />
      {isCalendarWidgetActive && <CalendarWidget />}
    </>
  );
};
