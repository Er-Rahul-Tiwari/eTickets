import {
  USER_PROFILE_ERROR,
  USER_PROFILE_PASSWORD_ERROR,
  USER_PROFILE_PASSWORD_UPDATED,
  USER_PROFILE_UPDATED,
  USER_PROFILE_LOADED,
  LOADING_ON_PROFILE_SUBMIT,
  LOADING_ON_CHANGING_PASSWORD,
} from "actions/types";

const initalState = {
  loading: true,
  loadingChangePassword: true,
  error: {},
  user: null,
};

export default function (state = initalState, action) {
  const { type, payload } = action;
  switch (type) {
    case USER_PROFILE_LOADED:
      return {
        ...state,
        user: payload,
        loading: false,
        loadingChangePassword: false,
      };
    case USER_PROFILE_UPDATED:
      console.log("paylod", payload);
      return {
        ...state,
        user: payload,
        loading: false,
      };
    case USER_PROFILE_PASSWORD_UPDATED:
      return {
        ...state,
        user: payload,
        loadingChangePassword: false,
      };
    case USER_PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case USER_PROFILE_PASSWORD_ERROR:
      return {
        ...state,
        error: payload,
        loadingChangePassword: false,
      };
    case LOADING_ON_PROFILE_SUBMIT:
      return {
        ...state,
        loading: true,
      };
    case LOADING_ON_CHANGING_PASSWORD:
      return {
        ...state,
        loadingChangePassword: true,
      };
    default:
      return state;
  }
}
