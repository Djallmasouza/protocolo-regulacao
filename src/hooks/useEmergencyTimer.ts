import { useState, useEffect, useCallback } from 'react';

export function useEmergencyTimer(initialTime = 60) {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const reset = useCallback((newTime = initialTime) => {
    setTimeLeft(newTime);
    setIsRunning(true);
  }, [initialTime]);

  const stop = useCallback(() => setIsRunning(false), []);
  const start = useCallback(() => setIsRunning(true), []);

  const progress = (timeLeft / initialTime) * 100;

  return {
    timeLeft,
    isRunning,
    progress,
    reset,
    stop,
    start
  };
}
