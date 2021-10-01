/* eslint-disable import/no-anonymous-default-export */

const initialState = {
  theSchedule: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "schedule/fetched":
      return {
        ...state,
        theSchedule: [...action.payload],
      };
    default:
      return state;
  }
};
