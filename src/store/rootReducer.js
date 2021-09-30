import { combineReducers } from "redux";
import user from "./user/reducer";
import performance from "./performance/reducer";

export default combineReducers({
  user,
  performance,
});
