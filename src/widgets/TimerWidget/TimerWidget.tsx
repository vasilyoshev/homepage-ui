import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@material-ui/core';
import { TimerWidgetControls } from 'components';
import TimerIcon from '@material-ui/icons/Timer';
import styles from './TimerWidget.module.scss';

export const TimerWidget: React.FC = () => {
  const [time, setTime] = useState<number>(0);
  const [timerOn, setTimerOn] = useState<boolean>(false);

  useEffect(() => {
    let interval = 0;
    if (timerOn) {
      interval = window.setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!timerOn) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerOn]);

  const startTimer = () => setTimerOn(true);
  const stopTimer = () => setTimerOn(false);
  const resetTimer = () => setTime(0);
  const resumeTimer = () => setTimerOn(true);

  return (
    <Card className={styles.timerContainer} elevation={6}>
      <CardContent>
        <TimerIcon fontSize="large" />
        <div className={styles.display}>
          <span>{('0' + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
          <span>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
          <span>{('0' + ((time / 10) % 100)).slice(-2)}</span>
        </div>
        <TimerWidgetControls
          time={time}
          timerOn={timerOn}
          startTimer={startTimer}
          stopTimer={stopTimer}
          resetTimer={resetTimer}
          resumeTimer={resumeTimer} />
      </CardContent>
    </Card>
  );
};
