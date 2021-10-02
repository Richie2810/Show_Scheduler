/* eslint-disable import/no-anonymous-default-export */
import { ScheduleAction, ScheduleState } from "./types";
const initialState: ScheduleState = {
  theSchedule: [],
};

export default (state = initialState, action: ScheduleAction) => {
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
