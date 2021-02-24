import React from 'react';
import { useSelector } from 'react-redux';
import { AddWidgetFab } from 'components';
import { CalendarWidget, TodoWidget } from 'widgets';
import { selectIsCalendarWidgetActive, selectIsTodoWidgetActive } from 'slices';

export const Home: React.FC = () => {
  const isCalendarWidgetActive = useSelector(selectIsCalendarWidgetActive);
  const isTodoWidgetActive = useSelector(selectIsTodoWidgetActive);

  return (
    <>
      <AddWidgetFab />
      {isCalendarWidgetActive && <CalendarWidget />}
      {isTodoWidgetActive && <TodoWidget />}
    </>
  );
};
