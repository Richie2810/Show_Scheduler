import axios from "axios";
import { apiUrl } from "../../config/constants";
import { ScheduleState } from "./types";

const scheduleFetched = (schedule: String) => ({
  type: "schedule/fetched",
  payload: schedule,
});

export const getSchedule =
  (name: String) => async (dispatch: any, getstate: ScheduleState) => {
    try {
      const response = await axios.post(
        `${apiUrl}/mySchedule`,
        {
          name,
        },
        {}
      );
      dispatch(scheduleFetched(response.data));
    } catch (e: any) {
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
