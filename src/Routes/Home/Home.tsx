import React from 'react';
import { useSelector } from 'react-redux';
import { AddWidgetFab } from 'components';
import { CalendarWidget, TodoWidget } from 'widgets';
import { selectIsCalendarWidgetActive, selectIsTodoWidgetActive } from 'slices';
import { CryptoCurrencyTracker } from 'widgets';

export const Home: React.FC = () => {
  const isCalendarWidgetActive = useSelector(selectIsCalendarWidgetActive);
  const isTodoWidgetActive = useSelector(selectIsTodoWidgetActive);

  return (
    <>
      <AddWidgetFab />
      <CryptoCurrencyTracker />
      {isCalendarWidgetActive && <CalendarWidget />}
      {isTodoWidgetActive && <TodoWidget />}
    </>
  );
};
