import axios from "axios";
import { ObjectId } from "mongoose";
import { apiUrl } from "../../config/constants";
import { UserAction, UserState } from "./types";

const userFetched = (user: String): UserAction => {
  return {
    type: "user/fetched",
    payload: user,
  };
};

export const logOut = () => ({ type: "user/logOut" });

export const signIn = (name: String) => {
  return async (dispatch: any, getState: UserState) => {
    try {
      const response = await axios.post(
        `${apiUrl}/newFan`,
        {
          name,
        },
        {}
      );
      dispatch(userFetched(response.data));
    } catch (e: any) {
      console.log(e.message);
    }
  };
};

export const addToSchedule =
  (name: String, performance: ObjectId) =>
  async (dispatch: any, getstate: UserState) => {
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
    } catch (e: any) {
      console.log(e.messsage);
    }
  };

export const removeSchedule =
  (name: String, performance: ObjectId) =>
  async (dispatch: any, getState: UserState) => {
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
    } catch (e: any) {
      console.log(e.messsage);
    }
  };
