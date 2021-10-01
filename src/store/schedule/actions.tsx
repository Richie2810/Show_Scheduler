import axios from "axios";
import { apiUrl } from "../../config/constants";

const scheduleFetched = (schedule) => ({
  type: "schedule/fetched",
  payload: schedule,
});

export const getSchedule = (name) => async (dispatch, getstate) => {
  try {
    const response = await axios.post(
      `${apiUrl}/mySchedule`,
      {
        name,
      },
      {}
    );
    dispatch(scheduleFetched(response.data));
  } catch (e) {
    console.log(e.messsage);
  }
};
