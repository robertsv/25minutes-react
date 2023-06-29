import { createContext, useEffect, useRef, useState } from 'react';
import { interval } from 'rxjs';
import { TimerSatate } from '../common/TimerState';
import NotificationService from '../common/NotificationService';
import bellSound from '../assets/zapsplat_bell_small_hand_ring_short_012_39329.mp3';

const TimerContext = createContext();

export const TimerProvider = ({ children }) => {
  const [workTime, setWorkTime] = useState(45);
  const [breakTime, setBreakTime] = useState(15);
  const [time, setTime] = useState(workTime * 60);
  const [subscription, setSubscription] = useState();
  const [timerState, setTimerState] = useState(TimerSatate.READY);
  const [show, setShow] = useState(false);

  const timeRef = useRef(time);
  const timerStateRef = useRef(timerState);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    timeRef.current = time;
  }, [time]);

  useEffect(() => {
    timerStateRef.current = timerState;
  }, [timerState]);

  const startStop = () => {
    NotificationService.requestNotificationPermission();
    timerState === TimerSatate.WORK_RUNNING ||
    timerState === TimerSatate.BREAK_RUNNING
      ? stop()
      : start();
  };

  const start = () => {
    if (timerState === TimerSatate.READY) {
      setTimerState(TimerSatate.WORK_RUNNING);
    } else {
      setTimerState(TimerSatate.BREAK_RUNNING);
    }
    setSubscription(
      interval(1000).subscribe(() => {
        if (timeRef.current !== 0) {
          setTime((prevTime) => prevTime - 1);
        } else {
          const audio = new Audio(bellSound);
          audio.play();
          if (timerStateRef.current === TimerSatate.WORK_RUNNING) {
            NotificationService.createNotification(
              'Take a break!',
              'Well done! Take a break.'
            );
            setTime(breakTime);
            setTimerState(TimerSatate.BREAK_RUNNING);
          } else {
            NotificationService.createNotification(
              'Break is over!',
              'Time to work!'
            );
            setTime(workTime);
            setTimerState(TimerSatate.WORK_RUNNING);
          }
        }
      })
    );
  };

  const stop = () => {
    if (timerState === TimerSatate.WORK_RUNNING) {
      setTimerState(TimerSatate.WORK_PAUSED);
    } else {
      setTimerState(TimerSatate.BREAK_PAUSED);
    }
    subscription.unsubscribe();
  };

  const reset = () => {
    setTimerState(TimerSatate.READY);
    subscription && subscription.unsubscribe();
  };

  const getTimerState = () => {
    return timerState;
  };

  const getTime = () => {
    return time;
  };

  const getShow = () => {
    return show;
  };

  const getWorkTime = () => {
    return workTime;
  };

  const getBreakTime = () => {
    return breakTime;
  };

  return (
    <TimerContext.Provider
      value={{
        setWorkTime,
        setBreakTime,
        getWorkTime,
        getBreakTime,
        getTime,
        startStop,
        getTimerState,
        getShow,
        handleClose,
        handleShow,
        setTimerState,
        setTime,
        stop,
        reset,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};

export default TimerContext;
