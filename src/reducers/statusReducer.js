import { START_PAUSE } from "../constants/actionTypes";

const initialState = false;

const statusReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_PAUSE:
      return !state;

    default:
      return state;
  }
};

export default statusReducer;
