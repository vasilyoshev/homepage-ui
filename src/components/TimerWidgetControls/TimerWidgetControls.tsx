import React from 'react';
import { TimerWidgetControlsProps } from 'interfaces';
import Button from '@material-ui/core/Button';
import styles from './TimerWidgetControls.module.scss';

export const TimerWidgetControls: React.FC<TimerWidgetControlsProps> = ({ timerOn, time, startTimer, stopTimer, resetTimer, resumeTimer }) => {
  return (
    <section className={styles.buttons}>
      {!timerOn && time === 0 && (
        <Button variant="outlined" color="primary" onClick={startTimer}>Start</Button>
      )}
      {timerOn && <Button variant="outlined" color="secondary" onClick={stopTimer}>Stop</Button>}
      {!timerOn && time > 0 && (
        <Button variant="outlined" color="secondary" onClick={resetTimer}>Reset</Button>
      )}
      {!timerOn && time > 0 && (
        <Button variant="outlined" color="primary" onClick={resumeTimer}>Resume</Button>
      )}
    </section>
  );
};
