import { data } from "react-router-dom"
import { CREATE_NOTES_ERROR, CREATE_NOTES_LOADING, CREATE_NOTES_SUCCESS, DELETE_NOTES_ERROR, DELETE_NOTES_LOADING, DELETE_NOTES_SUCCESS, GET_NOTES_ERROR, GET_NOTES_LOADING, GET_NOTES_SUCCESS, UPDATE_NOTES_ERROR, UPDATE_NOTES_LOADING, UPDATE_NOTES_SUCCESS } from "./note.types"

const initialState = {
    token: null,
    auth: false,
    data: [],
    loading: false,
    error:false
}

export default function noteReducer(state=initialState,action) {
    switch(action.type){
        case GET_NOTES_LOADING:{
            return {
                ...state, loading: true, error: null
            }
        }
        case GET_NOTES_SUCCESS:{
            // console.log("Payload in GET_NOTES_SUCCESS:", payload); 
            return {
                ...state, loading: false, error: false, data: action.payload
            }
        }
        case GET_NOTES_ERROR:{
            return {
                ...state, loading: false, error: true
            }
        }
        case CREATE_NOTES_LOADING:{
            return {
                ...state, loading: true
            }
        }
        case CREATE_NOTES_SUCCESS:{
            return {
                ...state, loading: false, error: false
            }
        }
        case CREATE_NOTES_ERROR:{
            return {
                ...state, loading: false, error: true
            }
        }
        case UPDATE_NOTES_LOADING:{
            return {
                ...state, loading: true
            }
        }
        case UPDATE_NOTES_SUCCESS:{
            return {
                ...state, loading: false, error: false
            }
        }
        case UPDATE_NOTES_ERROR:{
            return {
                ...state, loading: false, error: true
            }
        }
        case DELETE_NOTES_LOADING:{
            return {
                ...state, loading: true
            }
        }
        case DELETE_NOTES_SUCCESS:{
            return {
                ...state, loading: false, error: false
            }
        }
        case DELETE_NOTES_ERROR:{
            return {
                ...state, loading: false, error: true
            }
        }
        default:
      return state; 
    }
}