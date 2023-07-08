import { IS_SESSION } from "../constants/actionTypes";

const initialState = true;

const timerLabelReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_SESSION:
      return !state;

    default:
      return state;
  }
};

export default timerLabelReducer;
