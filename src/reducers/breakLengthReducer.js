const INCREMENT_BREAK = "INCREMENT_BREAK";
const DECREMENT_BREAK = "DECREMENT_BREAK";

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
