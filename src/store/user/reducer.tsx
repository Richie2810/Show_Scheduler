/* eslint-disable import/no-anonymous-default-export */
import { UserState, UserAction } from "./types";
const initialState: UserState = {
  theUser: [],
};

export default (state = initialState, action: UserAction) => {
  switch (action.type) {
    case "user/fetched":
      return { ...state, theUser: action.payload[0] };
    default:
      return state;
  }
};
