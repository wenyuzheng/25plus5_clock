import { useDispatch, useSelector } from "react-redux";
import "./css/Controller.css";
import {
  START_PAUSE,
  DECREMENT_TIMER,
  RESET_TIMER,
  PAUSE,
  IS_SESSION,
} from "../constants/actionTypes";
import { useEffect } from "react";

const Controller = () => {
  const dispatch = useDispatch();

  const status = useSelector((state) => state.status);
  const timer = useSelector((state) => state.timer);

  const handleStartPause = () => {
    dispatch({ type: START_PAUSE });

    // console.log({ status });

    // setTimeout(() => {
    //   console.log(status);

    //   if (status) {
    //     console.log("countdown now");
    //   } else {
    //     console.log("pause countdown");
    //   }
    // }, 2000);
  };

  const startCountdown = () => {
    dispatch({ type: DECREMENT_TIMER });

    // console.log({ timer });

    // while (timer !== 0) {
    //   setInterval(() => {
    //     // dispatch({ type: DECREMENT_TIMER });
    //     timer--;
    //   }, 1000);

    //   console.log({ timer });
    // }
  };

  const resetTimer = () => {
    dispatch({ type: PAUSE });
    dispatch({ type: RESET_TIMER });
  };

  // useEffect(() => {
  //   if (status) {
  //     dispatch({ type: DECREMENT_TIMER });
  //   } else {
  //     console.log("paused");
  //   }
  // }, [status]);

  // useEffect(() => {
  //   if (status) {
  //     while (timer !== 0) {
  //       setInterval(() => {
  //         dispatch({ type: DECREMENT_TIMER });
  //       }, 1000);

  //       console.log(timer);
  //     }
  //   } else {
  //     console.log("paused");
  //   }
  // }, [status, timer]);

  useEffect(() => {
    if (timer === 0) {
      console.log("end");
      dispatch({ type: IS_SESSION });
    }
  }, [timer]);

  return (
    <div id="buttons">
      <div id="start-button" className="button" onClick={startCountdown}>
        start
      </div>
      <div id="reset-button" className="button" onClick={resetTimer}>
        reset
      </div>
      <div onClick={() => console.log(status)}>show status</div>
    </div>
  );
};

export default Controller;
