import axios from "axios";
import { apiUrl } from "../../config/constants";

const loginSuccess = (user) => {
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
      dispatch(loginSuccess(response.data));
    } catch (e) {
      console.log(e.message);
    }
  };
};
