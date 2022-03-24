import React from 'react';
import { useSelector } from 'react-redux';
import { AddWidgetFab } from 'components';
import { CalendarWidget, TodoWidget, CryptoCurrencyTrackerWidget, TimerWidget, WeatherWidget } from 'widgets';
import {
  selectIsCalendarWidgetActive,
  selectIsTodoWidgetActive,
  selectIsCryptoCurrencyWidgetActive,
  selectIsTimerWidgetActive,
  selectIsWeatherWidgetActive,
} from 'slices';
import styles from './Home.module.scss';

export const Home: React.FC = () => {
  const isCalendarWidgetActive = useSelector(selectIsCalendarWidgetActive);
  const isTodoWidgetActive = useSelector(selectIsTodoWidgetActive);
  const isCryptoCurrencyWidgetActive = useSelector(selectIsCryptoCurrencyWidgetActive);
  const isTimerWidgetActive = useSelector(selectIsTimerWidgetActive);
  const isWeatherWidgetActive = useSelector(selectIsWeatherWidgetActive);

  return (
    <>
      <AddWidgetFab />
      <div className={styles.widgetsContainer}>
        <div>{isCryptoCurrencyWidgetActive && <CryptoCurrencyTrackerWidget />}</div>
        <div>{isWeatherWidgetActive && <WeatherWidget />}</div>
        <div>{isTimerWidgetActive && <TimerWidget />}</div>
        <div>{isTodoWidgetActive && <TodoWidget />}</div>
        <div>{isCalendarWidgetActive && <CalendarWidget />}</div>
      </div>
    </>
  );
};
