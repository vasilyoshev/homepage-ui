import React from 'react';
import { useSelector } from 'react-redux';
import { AddWidgetFab } from 'components';
import { CalendarWidget, TodoWidget, CryptoCurrencyTrackerWidget, TimerWidget, WeatherWidget } from 'widgets';
import { selectIsCalendarWidgetActive, selectIsTodoWidgetActive, selectIsCryptoCurrencyWidgetActive, selectIsTimerWidgetActive, selectIsWeatherWidgetActive } from 'slices';
import styles from './Home.module.scss';

export const Home: React.FC = () => {
  const isCalendarWidgetActive = useSelector(selectIsCalendarWidgetActive);
  const isTodoWidgetActive = useSelector(selectIsTodoWidgetActive);
  const isCryptoCurrencyWidgetActive = useSelector(selectIsCryptoCurrencyWidgetActive);
  const isTimerWidgetActive = useSelector(selectIsTimerWidgetActive);
  const isWeatherWidgetActive = useSelector(selectIsWeatherWidgetActive);

  return (
    <div className={styles.gridContainer}>
      <AddWidgetFab />
      <div className={styles.CryptoWidget}>
        {isCryptoCurrencyWidgetActive && <CryptoCurrencyTrackerWidget />}
      </div>
      <div className={styles.WeatherWidget}>
        {isWeatherWidgetActive && <WeatherWidget />}
      </div>
      <div className={styles.TimerWidget}>
        {isTimerWidgetActive && <TimerWidget />}
      </div>
      <div className={styles.TodoWidget}>
        {isTodoWidgetActive && <TodoWidget />}
      </div>
      <div className={styles.CalendarWidget}>
        {isCalendarWidgetActive && <CalendarWidget />}
      </div>
    </div>
  );
};
