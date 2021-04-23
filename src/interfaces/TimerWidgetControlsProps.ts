export interface TimerWidgetControlsProps {
    time: number;
    timerOn: boolean;
    startTimer: () => void;
    stopTimer:  () => void;
    resetTimer: () => void;
    resumeTimer: () => void;
}
