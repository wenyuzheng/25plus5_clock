import { useSelector } from "react-redux";
import getTime from "../functions/getTime";

const Display = () => {
  const timerLabel = useSelector((state) => state.timerLabel);
  const timer = useSelector((state) => state.timer);

  return (
    <div id="timer">
      <div id="timer-label">{timerLabel}</div>
      <div id="time-left">{getTime(timer)}</div>
    </div>
  );
};

export default Display;
