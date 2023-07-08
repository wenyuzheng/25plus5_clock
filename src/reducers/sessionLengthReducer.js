const INCREMENT_SESSION = "INCREMENT_SESSION";
const DECREMENT_SESSION = "DECREMENT_SESSION";

const initialState = 25;

const sessionLengthReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_SESSION:
      return state + 1;

    case DECREMENT_SESSION:
      return state - 1;

    default:
      return state;
  }
};

export default sessionLengthReducer;
