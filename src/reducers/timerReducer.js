import {
  DECREMENT_TIMER,
  RESET_TIMER,
  SET_TIMER,
} from "../constants/actionTypes";

const initialState = 25 * 60;

const timerReducer = (state = initialState, action) => {
  switch (action.type) {
    case DECREMENT_TIMER:
      if (state !== 0) {
        return state - 1;
      } else {
        return state;
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
