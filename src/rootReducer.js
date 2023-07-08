import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  breakLength: breakLengthReducer,
  sessionLength: sessionLengthReducer,
  timerLabel: timerLabelReducer,
});

export default rootReducer;
