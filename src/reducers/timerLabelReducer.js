const SESSION_END = "SESSION_END";
const SESSION_START = "SESSION_START";

const initialState = "SESSION";

const timerLabelReducer = (state = initialState, action) => {
  switch (action.type) {
    case SESSION_END:
      return "BREAK";

    case SESSION_START:
      return "SESSION";

    default:
      return state;
  }
};

export default timerLabelReducer;
