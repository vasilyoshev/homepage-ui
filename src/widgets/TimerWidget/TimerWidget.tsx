import React, { useState, useEffect } from 'react';
import styles from './TimerWidget.module.scss';
import { TimerWidgetControls } from 'components';

export const TimerWidget: React.FC = () => {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

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
    <main className={styles.timers}>
      <h2>Timer</h2>
      <section className={styles.display}>
        <span>{('0' + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{('0' + ((time / 10) % 100)).slice(-2)}</span>
      </section>
      <TimerWidgetControls
        time={time}
        timerOn={timerOn}
        startTimer={startTimer}
        stopTimer={stopTimer}
        resetTimer={resetTimer}
        resumeTimer={resumeTimer} />
    </main>
  );
};
