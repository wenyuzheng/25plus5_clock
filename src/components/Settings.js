import { useDispatch, useSelector } from "react-redux";
import Setting from "./Setting";
import {
  INCREMENT_BREAK,
  DECREMENT_BREAK,
  INCREMENT_SESSION,
  DECREMENT_SESSION,
} from "../constants/actionTypes";

const Settings = () => {
  const dispatch = useDispatch();
  const breakLength = useSelector((state) => state.breakLength);
  const sessionLength = useSelector((state) => state.sessionLength);

  const handleIncrementBreak = () => dispatch({ type: INCREMENT_BREAK });
  const handleDecrementBreak = () => dispatch({ type: DECREMENT_BREAK });

  const handleIncrementSession = () => dispatch({ type: INCREMENT_SESSION });
  const handleDecrementSession = () => dispatch({ type: DECREMENT_SESSION });

  return (
    <div>
      <Setting
        label="Break Length"
        length={breakLength}
        increment={handleIncrementBreak}
        decrement={handleDecrementBreak}
      />
      <Setting
        label="Session Length"
        length={sessionLength}
        increment={handleIncrementSession}
        decrement={handleDecrementSession}
      />
    </div>
  );
};

export default Settings;
