import {
  AUTH_ERROR,
  LOADING_ON_AUTH_SUBMIT,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  RESET_LINK_SUCCESS,
  RESET_LINK_FAIL,
  USER_LOADED,
  LOGOUT,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  CONFIRM_ACCOUNT,
} from "actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: true,
  user: null,
  //email:'',
  error: {},
  confirmAccount: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case AUTH_ERROR:
    case LOGOUT:
    case LOGIN_FAIL:
      localStorage.removeItem("jwt");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
      };

    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
      };
    case REGISTER_SUCCESS:
    case RESET_LINK_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      };
    case REGISTER_FAIL:
    case RESET_LINK_FAIL:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case CONFIRM_ACCOUNT:
      return {
        ...state,
        confirmAccount: payload,
      };
    case LOADING_ON_AUTH_SUBMIT:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
}
