import { combineReducers } from "@reduxjs/toolkit";
import breakLengthReducer from "./reducers/breakLengthReducer";
import sessionLengthReducer from "./reducers/sessionLengthReducer";
import timerLabelReducer from "./reducers/timerLabelReducer";
import timerReducer from "./reducers/timerReducer";
import statusReducer from "./reducers/statusReducer";

const rootReducer = combineReducers({
  breakLength: breakLengthReducer,
  sessionLength: sessionLengthReducer,
  timerLabel: timerLabelReducer,
  timer: timerReducer,
  status: statusReducer,
});

export default rootReducer;
