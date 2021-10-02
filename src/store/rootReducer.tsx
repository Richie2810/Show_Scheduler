import { combineReducers } from "redux";
import user from "./user/reducer";
import performance from "./performance/reducer";
import schedule from "./schedule/reducer";

export default combineReducers({
  user,
  performance,
  schedule,
});

export type ReduxState = ReturnType<typeof combineReducers>;
