import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import userReducer from "./Users/user.reducer";
import {thunk} from "redux-thunk"; // Corrected the import

let rootReducer = combineReducers({
    userReducer: userReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));