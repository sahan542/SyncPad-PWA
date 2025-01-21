import { LOGIN_USER_SUCCESS, LOGIN_USER_ERROR,LOGOUT } from "./user.types";

// Retrieve token from localStorage when initializing the app
const persistedToken = localStorage.getItem("authToken");

const initialState = {
  token: persistedToken || null, // Use the token from localStorage, or null if not found
  auth: !!persistedToken,       // Set auth to true if a token exists, otherwise false
  loading: false,
  error: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        token: action.payload, // Update token with payload
        auth: true,
        loading: false,
        error: false,
      };
    case LOGIN_USER_ERROR:
      return {
        ...state,
        token: null, // Reset token on error
        auth: false,
        loading: false,
        error: true,
      };
      case LOGOUT:{
        return {
          token:  null,
          auth: null,
          loading: false,
          error: false,
        }
      }

    default:
      return state;
  }
};

export default userReducer;
