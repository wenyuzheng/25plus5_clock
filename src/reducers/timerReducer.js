import {
  DECREMENT_SESSION_TIMER,
  DECREMENT_BREAK_TIMER,
  RESET_TIMER,
  SET_TIMER,
} from "../constants/actionTypes";

const initialState = {
  session_timer: 25 * 60,
  break_timer: 5 * 60,
};

const timerReducer = (state = initialState, action) => {
  switch (action.type) {
    case DECREMENT_SESSION_TIMER:
      if (state.session_timer !== 0) {
        return state.session_timer - 1;
      } else {
        return state.session_timer;
      }

    case DECREMENT_BREAK_TIMER:
      if (state.break_timer !== 0) {
        return state.break_timer - 1;
      } else {
        return state.break_timer;
      }

    case RESET_TIMER:
      return initialState;

    case SET_TIMER:
      return action.payload;

    default:
      return state;
  }
};

export default timerReducer;
