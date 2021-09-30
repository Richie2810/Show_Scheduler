import axios from "axios";
import { apiUrl } from "../../config/constants";

const performancesFetched = (performances) => ({
  type: "performance/fetched",
  payload: performances,
});

export const getPerformances = () => async (dispatch, getState) => {
  try {
    const response = await axios.get(`${apiUrl}/allPerformances`);
    console.log(response.data);
    dispatch(performancesFetched(response.data));
  } catch (e) {
    console.log(e.messsage);
  }
};
