import { useSelector } from "react-redux";
import getTime from "../functions/getTime";

const Display = () => {
  const isSession = useSelector((state) => state.isSession);
  const timer = useSelector((state) => state.timer);
  // const timer = useSelector((state) =>
  //   isSession ? state.sessionLength * 60 : state.breakLength * 60
  // );

  return (
    <div id="timer">
      <div id="timer-label">{isSession ? "Session" : "Break"}</div>
      <div id="time-left">{getTime(timer)}</div>
    </div>
  );
};

export default Display;
