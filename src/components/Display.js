const Display = () => {
  const timerLabel = "Session";

  return (
    <div id="timer">
      <div id="timer-label">{timerLabel}</div>
      <div id="time-left">Countdown</div>
    </div>
  );
};

export default Display;
