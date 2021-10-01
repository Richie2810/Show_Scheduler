/* eslint-disable import/no-anonymous-default-export */

const initialState = {
  theUser: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "user/fetched":
      return { ...state, theUser: action.payload[0] };
    case "user/logOut":
      return { ...initialState, theUser: [] };
    default:
      return state;
  }
};
