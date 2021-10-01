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

// export const getAllAlerts = (name) => async (dispatch, getState) => {
//   try {
//     const response = await axios.post(`${apiUrl}/15MinuteCall`, {
//       name,
//     });
//     console.log(response.data);
//     // dispatch(performancesFetched(response.data));
//   } catch (e) {
//     console.log(e.messsage);
//   }
// };
