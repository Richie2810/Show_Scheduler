import axios from "axios";
import { apiUrl } from "../../config/constants";

const userFetched = (user) => {
  return {
    type: "user/fetched",
    payload: user,
  };
};

export const logOut = () => ({ type: "user/logOut" });

export const signIn = (name: String) => {
  return async (dispatch: any, getState) => {
    try {
      const response = await axios.post(
        `${apiUrl}/newFan`,
        {
          name,
        },
        {}
      );
      dispatch(userFetched(response.data));
    } catch (e) {
      console.log(e.message);
    }
  };
};

export const addToSchedule =
  (name, performance) => async (dispatch, getstate) => {
    try {
      const response = await axios.patch(
        `${apiUrl}/addToSchedule`,
        {
          name,
          performance,
        },
        {}
      );
      dispatch(userFetched(response.data));
    } catch (e) {
      console.log(e.messsage);
    }
  };

export const removeSchedule =
  (name, performance) => async (dispatch, getState) => {
    try {
      const response = await axios.patch(
        `${apiUrl}/removeSchedule`,
        {
          name,
          performance,
        },
        {}
      );
      dispatch(userFetched(response.data));
    } catch (e) {
      console.log(e.messsage);
    }
  };
