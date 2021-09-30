/* eslint-disable import/no-anonymous-default-export */

const initialState = {
  user: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "user/fetched":
      return { ...state, ...action.payload };
    case "user/logOut":
      return { ...initialState, name: null };
    default:
      return state;
  }
};
