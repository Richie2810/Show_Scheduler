import axios from "axios";
import { apiUrl } from "../../config/constants";

const performancesFetched = (performances) => ({
  type: "performance/fetched",
  payload: performances,
});

export const getPerformances = () => async (dispatch, getState) => {
  try {
    const response = await axios.get(`${apiUrl}/allPerformances`);
    dispatch(performancesFetched(response.data));
  } catch (e) {
    console.log(e.messsage);
  }
};

export const addPerformance =
  (title, description, start_date, end_date) => async (dispatch, getState) => {
    try {
      const response = await axios.post(`${apiUrl}/addPerformance`, {
        title,
        description,
        start_date,
        end_date,
      });
      console.log(response.data);
      dispatch(performancesFetched(response.data));
    } catch (e) {
      console.log(e.messsage);
    }
  };

export const removePerformance =
  (performance) => async (dispatch, getState) => {
    try {
      const response = await axios.post(`${apiUrl}/removePerformance`, {
        performance,
      });
      console.log(response.data);
      dispatch(performancesFetched(response.data));
    } catch (e) {
      console.log(e.messsage);
    }
  };
