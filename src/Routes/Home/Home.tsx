import React from 'react';
import { useSelector } from 'react-redux';
import { AddWidgetFab } from 'components';
import { CalendarWidget, TodoWidget, CryptoCurrencyTrackerWidget } from 'widgets';
import { selectIsCalendarWidgetActive, selectIsTodoWidgetActive, selectIsCryptoCurrencyWidgetActive } from 'slices';

export const Home: React.FC = () => {
  const isCalendarWidgetActive = useSelector(selectIsCalendarWidgetActive);
  const isTodoWidgetActive = useSelector(selectIsTodoWidgetActive);
  const isCryptoCurrencyWidgetActive = useSelector(selectIsCryptoCurrencyWidgetActive);

  return (
    <>
      <AddWidgetFab />
      {isCryptoCurrencyWidgetActive && <CryptoCurrencyTrackerWidget />}
      {isCalendarWidgetActive && <CalendarWidget />}
      {isTodoWidgetActive && <TodoWidget />}
    </>
  );
};
