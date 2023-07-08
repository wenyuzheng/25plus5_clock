import { combineReducers } from "@reduxjs/toolkit";
import breakLengthReducer from "./reducers/breakLengthReducer";
import sessionLengthReducer from "./reducers/sessionLengthReducer";
import isSessionReducer from "./reducers/isSessionReducer";
import timerReducer from "./reducers/timerReducer";
import statusReducer from "./reducers/statusReducer";

const rootReducer = combineReducers({
  breakLength: breakLengthReducer,
  sessionLength: sessionLengthReducer,
  isSession: isSessionReducer,
  timer: timerReducer,
  status: statusReducer,
});

export default rootReducer;
