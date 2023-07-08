import { useSelector } from "react-redux";

const Display = () => {
  const timerLabel = useSelector((state) => state.timerLabel);

  return (
    <div id="timer">
      <div id="timer-label">{timerLabel}</div>
      <div id="time-left">Countdown</div>
    </div>
  );
};

export default Display;
