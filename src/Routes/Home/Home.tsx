import React from 'react';
import { useSelector } from 'react-redux';
import { AddWidgetFab } from 'components';
import { CalendarWidget, TodoWidget, CryptoCurrencyTrackerWidget, TimerWidget, WeatherWidget } from 'widgets';
import { selectIsCalendarWidgetActive, selectIsTodoWidgetActive, selectIsCryptoCurrencyWidgetActive, selectIsTimerWidgetActive } from 'slices';

export const Home: React.FC = () => {
  const isCalendarWidgetActive = useSelector(selectIsCalendarWidgetActive);
  const isTodoWidgetActive = useSelector(selectIsTodoWidgetActive);
  const isCryptoCurrencyWidgetActive = useSelector(selectIsCryptoCurrencyWidgetActive);
  const isTimerWidgetActive = useSelector(selectIsTimerWidgetActive);

  return (
    <>
      <AddWidgetFab />
      <WeatherWidget />
      {isTimerWidgetActive && <TimerWidget />}
      {isCryptoCurrencyWidgetActive && <CryptoCurrencyTrackerWidget />}
      {isCalendarWidgetActive && <CalendarWidget />}
      {isTodoWidgetActive && <TodoWidget />}
    </>
  );
};
