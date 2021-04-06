import axios from "axios";
import { setAlert, removeAlert } from "./alert";
import { setErrorsList } from "./errors";
import {
  USER_LOADED,
  USER_PROFILE_LOADED,
  AUTH_ERROR,
  LOADING_ON_AUTH_SUBMIT,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  CONFIRM_ACCOUNT,
  RESET_LINK_SUCCESS,
  RESET_LINK_FAIL,
  LOGOUT,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REMOVE_ERRORS,
  REMOVE_ALERT,
} from "./types";
import setAuthToken from "../utils/setAuthToken";

const headerOptions = {
  headers: {
    "Content-Type": "application/json",
  },
};

//Load User
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get(`/api/v1/users/me`);

    if (res.data.status === true) {
      dispatch({
        type: USER_LOADED,
        payload: res.data.response,
      });
      dispatch({
        type: USER_PROFILE_LOADED,
        payload: res.data.response,
      });
    } else {
      dispatch({ type: AUTH_ERROR });
      //dispatch(setAlert(res.data.message, "danger"));
    }
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
      payload: { msg: err.message },
    });
  }
};

//Register User
export const register = (formData) => async (dispatch) => {
  dispatch(loadingOnSubmit());
  const body = {
    name: formData.lastName
      ? formData.firstname + " " + formData.lastName
      : formData.firstname,
    email: formData.email,
    password: formData.password,
    passwordConfirm: formData.password,
    role: formData.role,
    phoneNumber: "",
    companyName: "",
    address: "",
  };

  try {
    dispatch(removeAlert());
    dispatch({ type: REMOVE_ERRORS });
    // const res = await axios.post(`/api/v1/users/signup`, body, headerOptions);
    const res = await axios.post(`/api/v1/users/signup`, body, headerOptions);
    if (res.data.status) {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data.response,
      });
      dispatch(setAlert(res.data.message, "success"));
    } else {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data.response,
      });
      const errors = res.data.errors;
      if (errors.length > 0) {
        dispatch(setAlert(res.data.message, "danger"));
        errors.forEach((error) => {
          dispatch(setErrorsList(error.msg, error.param));
        });
      } else {
        dispatch(setAlert(res.data.message, "danger"));
      }
    }
  } catch (err) {
    if (err !== undefined) {
      dispatch(setAlert(err.response.statusText, "danger"));
      dispatch({
        type: REGISTER_FAIL,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  }
};

//Login User
export const login = (email, password) => async (dispatch) => {
  const body = JSON.stringify({ email, password });
  dispatch(loadingOnSubmit());
  try {
    dispatch(removeAlert());
    dispatch({ type: REMOVE_ERRORS });

    const res = await axios.post(`/api/v1/users/login`, body, headerOptions);
    if (res.data.status === true) {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data.token,
      });
      dispatch(loadUser());
      dispatch(setAlert("You are logged in successfully.", "success"));
    } else {
      dispatch(setAlert(res.data.message, "danger"));
      dispatch({ type: LOGIN_FAIL });
      const errors = res.data.errors;
      if (errors.length > 0) {
        errors.forEach((error) => {
          dispatch(setErrorsList(error.msg, error.param));
        });
      }
    }
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Redirect to register screen
export const confirmToken = (token) => async (dispatch) => {
  try {
    const res = await axios.get(
      `/api/v1/users/confirmAccount/${token}`,
      headerOptions
    );
    dispatch({
      type: CONFIRM_ACCOUNT,
      payload: res.status === "fail" ? false : true,
    });
  } catch (err) {
    dispatch({
      type: RESET_LINK_FAIL,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Redirect to Login screen
export const loginRedirect = (history) => async (dispatch) => {
  dispatch({ type: REMOVE_ALERT });
  dispatch({ type: REMOVE_ERRORS });
  history.push("/login");
};

// Redirect to register screen
export const registerRedirect = (history) => async (dispatch) => {
  dispatch({ type: REMOVE_ALERT });
  dispatch({ type: REMOVE_ERRORS });
  history.push("/register");
};

// Redirect to forgot password screen
export const forgotPasswordRedirect = (history) => async (dispatch) => {
  dispatch({ type: REMOVE_ALERT });
  dispatch({ type: REMOVE_ERRORS });
  history.push("/forgotPassword");
};

// Dispatch Loading
export const loadingOnSubmit = () => async (dispatch) => {
  await dispatch({ type: LOADING_ON_AUTH_SUBMIT });
};

// Generate Reset Link
export const resetLink = ({ email }) => async (dispatch) => {
  const body = JSON.stringify({ email });
  dispatch(loadingOnSubmit());
  try {
    dispatch({ type: REMOVE_ERRORS });

    const res = await axios.post(
      `/api/v1/users/forgotPassword`,
      body,
      headerOptions
    );
    if (res.data.status === true) {
      dispatch({
        type: RESET_LINK_SUCCESS,
        payload: res.data.response,
      });
      dispatch(
        setAlert("We have e-mailed your password reset link!", "success")
      );
    } else {
      const errors = res.data.errors;
      if (errors.length > 0) {
        dispatch(setAlert(res.data.message, "danger"));
        errors.forEach((error) => {
          dispatch(setErrorsList(error.msg, error.param));
        });
      } else {
        dispatch(setAlert(res.data.message, "success"));
      }
    }
  } catch (err) {
    dispatch({
      type: RESET_LINK_FAIL,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Get email by id
export const getResetPassword = (token) => async (dispatch) => {
  try {
    const res = await axios.get(
      `/api/v1/users/resetPassword/${token}`,
      headerOptions
    );
    console.log("res", res);

    if (res.data.status === true) {
      await dispatch({
        type: RESET_LINK_SUCCESS,
      });
    } else {
      dispatch(setAlert(res.data.message, "danger"));
    }
    return res.data;
  } catch (err) {
    console.log(err);

    dispatch({
      type: RESET_LINK_FAIL,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//Dispatch Confirm password error
export const setPasswordError = (msg, param) => async (dispatch) => {
  dispatch(setErrorsList(msg, param));
};

// Reset Password
export const resetPassword = (password, passwordConfirm, token) => async (
  dispatch
) => {
  const body = JSON.stringify({ password, passwordConfirm });
  try {
    dispatch(removeAlert());
    dispatch({ type: REMOVE_ERRORS });
    const res = await axios.patch(
      `/api/v1/users/resetPassword/${token}`,
      body,
      headerOptions
    );
    console.log("res reset password", res);
    if (res.data.status === true) {
      dispatch({ type: RESET_LINK_SUCCESS });
      dispatch(login(res.data.data.user.email, password));
    } else {
      // dispatch(tokenInvalid());
      const errors = res.data.errors;
      if (errors) {
        dispatch(setAlert(res.data.message, "danger"));
        errors.forEach((error) => {
          dispatch(setErrorsList(error.msg, error.param));
        });
      }
    }
  } catch (err) {
    dispatch({
      type: RESET_LINK_FAIL,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const logout = () => async (dispatch) => {
  try {
    dispatch(removeAlert());
    dispatch({ type: REMOVE_ERRORS });
    const res = await axios.get(`/api/v1/users/logout`, headerOptions);

    if (res.data.status === true) {
      dispatch({ type: LOGOUT });
    } else {
      // dispatch(tokenInvalid());
      const errors = res.data.errors;
      if (errors) {
        dispatch(setAlert(res.data.message, "danger"));
        errors.forEach((error) => {
          dispatch(setErrorsList(error.msg, error.param));
        });
      }
    }
  } catch (err) {
    dispatch({ type: LOGOUT });
  }
};

// Token invalid
export const tokenInvalid = (history) => async (dispatch) => {
  history.push("/forgotPassword");
};
