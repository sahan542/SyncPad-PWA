import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import {thunk} from "redux-thunk"; // Correct import
import userReducer from "./Users/user.reducer";
import noteReducer from "./Notes/note.reducer";

let rootReducer = combineReducers({
    userReducer: userReducer,
    noteReducer: noteReducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
