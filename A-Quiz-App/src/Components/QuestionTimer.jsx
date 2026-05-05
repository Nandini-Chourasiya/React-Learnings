import { useEffect, useState } from "react";

export default function QuestionTimer({
  timeout,
  onTimeout,
  mode,
}) {
  const [remainingTime, setRemainingTime] =
    useState(timeout);

  useEffect(() => {
    setRemainingTime(timeout);
  }, [timeout]);

  useEffect(() => {
    if (!onTimeout) return;

    const Timer = setTimeout(onTimeout, timeout);

    return () => {
      clearTimeout(Timer);
    };
  }, [timeout, onTimeout]);

  useEffect(() => {
    const Interval = setInterval(() => {
      setRemainingTime(
        (prevRemaningTime) => prevRemaningTime - 100
      );
    }, 100);

    return () => {
      clearInterval(Interval);
    };
  }, [timeout]);

  return (
    <progress
      id="question-time"
      max={timeout}
      value={remainingTime}
      className={mode}
    />
  );
}