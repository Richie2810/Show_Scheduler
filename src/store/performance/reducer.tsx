/* eslint-disable import/no-anonymous-default-export */

import { PerformanceAction, PerformanceState } from "./types";

const initialState: PerformanceState = {
  allPerformances: [],
};

export default (state = initialState, action: PerformanceAction) => {
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
