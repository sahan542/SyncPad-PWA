import axios from "axios";
import {
  CREATE_NOTES_ERROR,
  CREATE_NOTES_LOADING,
  CREATE_NOTES_SUCCESS,
  DELETE_NOTES_ERROR,
  DELETE_NOTES_LOADING,
  DELETE_NOTES_SUCCESS,
  GET_NOTES_ERROR,
  GET_NOTES_LOADING,
  GET_NOTES_SUCCESS,
  UPDATE_NOTES_ERROR,
  UPDATE_NOTES_LOADING,
  UPDATE_NOTES_SUCCESS,
} from "./note.types";
import { toast } from "react-toastify";
import { BASE_URL } from "@/constants/config";
import { store } from "../store";
import { useSelector } from "react-redux";

const token = store.getState().userReducer;
console.log("token : ", token.token);

export const getNotes = () => async (dispatch) => {
    const token = store.getState().userReducer.token;
    if (!token) {
      console.error("Token is null or undefined. User might not be logged in.");
      return;
    }  
    try {
      const response = await axios.get(`${BASE_URL}/note/notes`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("response get All : ",response.data.data);
  
      const { status, data } = response.data;
      if (status === 1) {
        dispatch({ type: GET_NOTES_SUCCESS, payload: data });
        localStorage.setItem("authToken", token);
        dispatch({ type: GET_NOTES_SUCCESS, payload: data });
        toast.success("Login successful!");
      } else {
        dispatch({ type: GET_NOTES_ERROR });
      }
    } catch (error) {
      console.error("Error fetching notes:", error);
      dispatch({ type: GET_NOTES_ERROR });
    }
  };
  

export const createNotes = (createNoteData) => async (dispatch) => {
  const token = store.getState().userReducer.token;
  dispatch({ type: CREATE_NOTES_LOADING });
  try {
    const response = await axios.post(BASE_URL + "/note/create", {
      method: "post",
      data: createNoteData,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const { status, message, data } = response.data;
    console.log("console log : ", message);
    if (status === 1) {
      dispatch({ type: CREATE_NOTES_SUCCESS, payload: data });
    } else {
      dispatch({ type: CREATE_NOTES_ERROR });
    }
  } catch (error) {
    dispatch({ type: CREATE_NOTES_ERROR });
  }
};

export const updateNotes = (updateNoteData, id) => async (dispatch) => {
  const token = store.getState().userReducer.token;
  dispatch({ type: UPDATE_NOTES_LOADING });
  try {
    const response = await axios.patch(
      `${BASE_URL}/note/update/${id}`,
      updateNoteData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const { status, message, data } = response.data;
    console.log("console log : ", message);
    if (status === 1) {
      dispatch({ type: UPDATE_NOTES_SUCCESS, payload: data });
    } else {
      dispatch({ type: UPDATE_NOTES_ERROR });
    }
  } catch (error) {
    dispatch({ type: UPDATE_NOTES_ERROR });
  }
};

export const deleteNotes = (id) => async (dispatch) => {
  const token = store.getState().userReducer.token;
  dispatch({ type: DELETE_NOTES_LOADING });
  try {
    const response = await axios.delete(BASE_URL + `/note/delete/${id}`, {
      method: "delete",
      headers: {
        Authorization: `Bearer ${token}`,
        id: id,
      },
    });

    const { status, message } = response.data;
    console.log("console log : ", message);
    if (status === 1) {
      dispatch({ type: DELETE_NOTES_SUCCESS });
    } else {
      dispatch({ type: DELETE_NOTES_ERROR });
    }
  } catch (error) {
    dispatch({ type: DELETE_NOTES_ERROR });
  }
};
