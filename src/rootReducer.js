import { combineReducers } from "@reduxjs/toolkit";
import breakLengthReducer from "./reducers/breakLengthReducer";
import sessionLengthReducer from "./reducers/sessionLengthReducer";
import timerLabelReducer from "./reducers/timerLabelReducer";

const rootReducer = combineReducers({
  breakLength: breakLengthReducer,
  sessionLength: sessionLengthReducer,
  timerLabel: timerLabelReducer,
});

export default rootReducer;
