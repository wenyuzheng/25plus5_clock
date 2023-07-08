import { INCREMENT_BREAK, DECREMENT_BREAK } from "../constants/actionTypes";

const initialState = 5;

const breakLengthReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_BREAK:
      return state + 1;

    case DECREMENT_BREAK:
      return state - 1;

    default:
      return state;
  }
};

export default breakLengthReducer;
