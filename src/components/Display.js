import { useSelector } from "react-redux";
import getTime from "../functions/getTime";

const Display = () => {
  const isSession = useSelector((state) => state.isSession);
  const break_timer = useSelector((state) => state.timer.break_timer);
  const session_timer = useSelector((state) => state.timer.session_timer);

  console.log({ break_timer, session_timer });

  // const timer = useSelector((state) =>
  //   isSession ? state.sessionLength * 60 : state.breakLength * 60
  // );

  return (
    <div id="timer">
      <div id="timer-label">{isSession ? "Session" : "Break"}</div>
      <div id="time-left">
        {getTime(isSession ? session_timer : break_timer)}
      </div>
    </div>
  );
};

export default Display;
