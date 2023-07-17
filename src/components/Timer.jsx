import React, { useContext } from 'react';
import TimerContext from '../context/TimerContext';
import { formatTime } from '../common/Utils';
import { TimerSatate } from '../common/TimerState';

const Timer = () => {
  const { getTimerState, getTime } = useContext(TimerContext);

  return (
    <div
      className={`countdown__timer ${
        [
          TimerSatate.READY,
          TimerSatate.WORK_RUNNING,
          TimerSatate.WORK_PAUSED,
        ].includes(getTimerState())
          ? 'countdown__timer--work'
          : 'countdown__timer--break'
      }`}
    >
      {formatTime(getTime())}
    </div>
  );
};

export default Timer;
