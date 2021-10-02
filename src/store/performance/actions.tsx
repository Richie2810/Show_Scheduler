import axios from "axios";
import { apiUrl } from "../../config/constants";
import { PerformanceAction, PerformanceState } from "./types";

const performancesFetched = (performances: String) => ({
  type: "performance/fetched",
  payload: performances,
});

export const getPerformances =
  () => async (dispatch: any, getState: PerformanceAction) => {
    try {
      const response = await axios.get(`${apiUrl}/allPerformances`);
      dispatch(performancesFetched(response.data));
    } catch (e: any) {
      console.log(e.messsage);
    }
  };

export const addPerformance =
  (title: String, description: String, start_date: String, end_date: String) =>
  async (dispatch: any, getState: PerformanceState) => {
    try {
      const response = await axios.post(`${apiUrl}/addPerformance`, {
        title,
        description,
        start_date,
        end_date,
      });
      // console.log(response.data);
      dispatch(performancesFetched(response.data));
    } catch (e: any) {
      console.log(e.messsage);
    }
  };

export const removePerformance =
  (performance: String) =>
  async (dispatch: any, getState: PerformanceState) => {
    try {
      const response = await axios.post(`${apiUrl}/removePerformance`, {
        performance,
      });
      // console.log(response.data);
      dispatch(performancesFetched(response.data));
    } catch (e: any) {
      console.log(e.messsage);
    }
  };

export const showsOver =
  () => async (dispatch: any, getState: PerformanceState) => {
    try {
      const response = await axios.delete(`${apiUrl}/showsOver`);
      // console.log(response.data);
      dispatch(performancesFetched(response.data));
    } catch (e: any) {
      console.log(e.messsage);
    }
  };
