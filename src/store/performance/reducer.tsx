/* eslint-disable import/no-anonymous-default-export */

const initialState = {
  allPerformances: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "performance/fetched":
      return {
        ...state,
        allPerformances: [...action.payload],
      };
    default:
      return state;
  }
};
