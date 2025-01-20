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
  //   LOGIN_NOTE_ERROR,
  //   LOGIN_NOTE_SUCCESS,
  UPDATE_NOTES_ERROR,
  UPDATE_NOTES_LOADING,
  UPDATE_NOTES_SUCCESS,
} from "./note.types";
import { toast } from "react-toastify";
import noteReducer from "./note.reducer";
import { BASE_URL } from "@/constants/config";
import { store } from "../store";
import { useSelector } from "react-redux";

const token = store.getState().userReducer; // Get token from Redux state
console.log("token : ", token);
console.log(store.getState());


export const getNotes = () => async (dispatch) => {
    const token = store.getState().userReducer.token; // Get token from userReducer
    if (!token) {
      console.error("Token is null or undefined. User might not be logged in.");
      return;
    }
  
    dispatch({ type: GET_NOTES_LOADING });
  
    try {
      const response = await axios.get(BASE_URL + "/note/notes", {
        headers: {
          Authorization: `Bearer ${token}`, // Pass token in headers
        },
      });
  
      const { status, data } = response.data;
      if (status === 1) {
        dispatch({ type: GET_NOTES_SUCCESS, payload: data });
        localStorage.setItem("authToken", token); // Save token in localStorage
        dispatch({ type: GET_NOTES_SUCCESS, payload: token });
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
  const token = store.getState().noteReducer;
  dispatch({ type: CREATE_NOTES_LOADING });
  try {
    const response = await axios.post(BASE_URL + "/note/create", {
      method: "post",
      data: createNoteData,
      headers: {
        Authorization: token,
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
  const token = store.getState().noteReducer;
  dispatch({ type: UPDATE_NOTES_LOADING });
  try {
    const response = await axios.patch(BASE_URL + "/note/update/${id}", {
      method: "patch",
      data: updateNoteData,
      headers: {
        Authorization: token,
        id: id,
      },
    });

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
  const token = store.getState().noteReducer;
  dispatch({ type: DELETE_NOTES_LOADING });
  try {
    const response = await axios.delete(BASE_URL + "/note/delete/${id}", {
      method: "delete",
      headers: {
        Authorization: token,
        id: id,
      },
    });

    const { status, message, data } = response.data;
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
