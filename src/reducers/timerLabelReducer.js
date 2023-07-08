import { SESSION_END, SESSION_START } from "../constants/actionTypes";

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
