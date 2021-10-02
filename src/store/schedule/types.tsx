export type ScheduleState = {
  theSchedule: String[];
};

export type ScheduleAction = { type: "schedule/fetched"; payload: String[] };
