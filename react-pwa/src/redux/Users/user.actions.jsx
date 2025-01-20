import axios from "axios";
import { LOGIN_USER_ERROR, LOGIN_USER_SUCCESS } from "./user.types";
import { toast } from "react-toastify";
import { BASE_URL } from "@/constants/config";

export const loginUser = (credentials) => async (dispatch) => {
  try {
    const response = await axios.post(
      BASE_URL+"/user/login",
      credentials
    );
    console.log("response : ",response.data.message);
    const { message, token, status } = response.data;
    console.log("Login Response:", response.data);
    if (status === 1) {
      dispatch({ type: LOGIN_USER_SUCCESS, payload: token });
      localStorage.setItem("authToken", token); // Save token in localStorage
      toast.success("Login successful!");
    } else {
      dispatch({ type: LOGIN_USER_ERROR });
      toast.error("Login Error!");
    }
  } catch (error) {
    console.log("Login Error:", error);
    dispatch({ type: LOGIN_USER_ERROR });
    toast.error("Login Error!");
  }
};
