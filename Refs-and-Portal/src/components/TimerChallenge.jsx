import { useState, useRef } from "react";
import { ResultModal } from "./ResultModal";

export function TimerChallenge({ title, targetTime }) {
  const timer = useRef(null);
  const dialog = useRef();

  const [timeRemaining, setTimeRemaining] = useState(
    targetTime * 1000
  );

  const timerIsActive =
    timeRemaining > 0 && timeRemaining < targetTime * 1000;

  function handleStart() {
    //multiple timers prevent
    if (timer.current) return;

    timer.current = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 10) {
          clearInterval(timer.current);
          timer.current = null; 
          dialog.current.open();
          return 0;
        }
        return prev - 10;
      });
    }, 10);
  }

  function handleStop() {
    clearInterval(timer.current);
    timer.current = null; 
    dialog.current.open();
  }

  function handleReset() {
    clearInterval(timer.current); 
    timer.current = null;
    setTimeRemaining(targetTime * 1000);
  }

  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        remainingTime={timeRemaining}
        onReset={handleReset}
      />

      <section className="challenge">
        <h2>{title}</h2>

        <p className="challengeTime">{targetTime} second{targetTime > 1 ? "s" : ""} </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p>
          {timerIsActive ? "Time is running..." : "Time inactive"}
        </p>
      </section>
    </>
  );
}