import { DECREMENT_TIMER, RESET_TIMER } from "../constants/actionTypes";

const initialState = 1430;

const timerReducer = (state = initialState, action) => {
  switch (action.type) {
    case DECREMENT_TIMER:
      return state - 1;

    case RESET_TIMER:
      return initialState;

    default:
      return state;
  }
};

export default timerReducer;
