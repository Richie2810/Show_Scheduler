export type PerformanceState = {
  allPerformances: String[];
};

export type PerformanceAction = {
  type: "performance/fetched";
  payload: String[];
};
