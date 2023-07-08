import { START_PAUSE, PAUSE } from "../constants/actionTypes";

const initialState = false;

const statusReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_PAUSE:
      return !state;

    case PAUSE:
      return false;

    default:
      return state;
  }
};

export default statusReducer;
