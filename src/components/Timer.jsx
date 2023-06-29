import React, { useContext } from 'react';
import TimerContext from '../context/TimerContext';
import { formatTime } from '../common/Utils';
import { TimerSatate } from '../common/TimerState';

const Timer = () => {
  // const [time, setTime] = useState(60 * 23 + 49);

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

      /* [ngClass]="{'countdown__timer--work': mode === 0, 'countdown__timer--break': mode === 1}"> */
      /* {{ timeLeft | minutesSeconds }} */
    >
      {formatTime(getTime())}
    </div>
  );
};

export default Timer;
