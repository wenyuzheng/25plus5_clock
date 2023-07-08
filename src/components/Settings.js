import { useDispatch, useSelector } from "react-redux";
import Setting from "./Setting";
import {
  INCREMENT_BREAK,
  DECREMENT_BREAK,
  INCREMENT_SESSION,
  DECREMENT_SESSION,
  SET_TIMER,
} from "../constants/actionTypes";
import "./css/Settings.css";
import { useEffect } from "react";

const Settings = () => {
  const dispatch = useDispatch();
  const breakLength = useSelector((state) => state.breakLength);
  const sessionLength = useSelector((state) => state.sessionLength);
  const status = useSelector((state) => state.status);

  const handleIncrementBreak = () => {
    if (!status) {
      dispatch({ type: INCREMENT_BREAK });
    }
  };
  const handleDecrementBreak = () => {
    if (!status) {
      dispatch({ type: DECREMENT_BREAK });
    }
  };

  const handleIncrementSession = () => {
    if (!status) {
      dispatch({ type: INCREMENT_SESSION });
    }
  };
  const handleDecrementSession = () => {
    if (!status) {
      dispatch({ type: DECREMENT_SESSION });
    }
  };

  useEffect(() => {
    dispatch({ type: SET_TIMER, payload: sessionLength * 60 });
  }, [sessionLength]);

  useEffect(() => {
    dispatch({ type: SET_TIMER, payload: breakLength * 60 });
  }, [breakLength]);

  return (
    <div id="settings">
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
