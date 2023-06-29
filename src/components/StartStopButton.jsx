import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import TimerContext from '../context/TimerContext';
import { TimerSatate } from '../common/TimerState';

const StartStopButton = () => {
  const { isRunning, isWorkTime, startStop, getTimerState } =
    useContext(TimerContext);

  return (
    <Button variant='danger' size='lg' onClick={startStop}>
      {getTimerState() === TimerSatate.READY && 'Start work'}
      {getTimerState() === TimerSatate.WORK_RUNNING && 'Pause work'}
      {getTimerState() === TimerSatate.WORK_PAUSED && 'Resume work'}
      {getTimerState() === TimerSatate.BREAK_RUNNING && 'Pause break'}
      {getTimerState() === TimerSatate.BREAK_PAUSED && 'Resume break'}
    </Button>
  );
};

export default StartStopButton;
