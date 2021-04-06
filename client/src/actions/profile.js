import axios from "axios";
import { setAlert, removeAlert } from "./alert";
import { setErrorsList } from "./errors";
import {
  REMOVE_ERRORS,
  USER_PROFILE_ERROR,
  USER_PROFILE_UPDATED,
  LOADING_ON_PROFILE_SUBMIT,
  LOADING_ON_CHANGING_PASSWORD,
  INITIAL_MODAL_STATE,
} from "./types";

// Profile
export const create = (formData, history) => async (dispatch) => {
  dispatch({ type: USER_PROFILE_ERROR });
  dispatch(loadingOnSubmit());

  const config = {
    headers: {
      "content-type": "application/json; multipart/form-data;",
    },
  };
  let param = new window.FormData();
  param.append("name", formData.name);
  param.append("email", formData.email);
  param.append("photo", formData.photo);
  param.append("role", formData.role);
  param.append("phoneNumber", formData.phoneNumber);
  param.append("address", formData.address);
  param.append("companyName", formData.companyName);
  param.append("password", formData.password);
  param.append("passwordConfirm", formData.passwordConfirm);

  param.append("summary", formData.summary);
  param.append("website", formData.website);
  param.append("facebook", formData.facebook);
  param.append("twitter", formData.twitter);
  param.append("linkedIn", formData.linkedIn);
  param.append("youtube", formData.youtube);

  try {
    const res = await axios.post(`/api/v1/users/me`, param, config);
    if (res.data.status === true) {
      dispatch({
        type: USER_PROFILE_UPDATED,
        payload: res.data.response,
      });
      dispatch(setAlert("Profile Update.", "success"));
      history.push("/profile");
    } else {
      const errors = res.data.errors;

      if (errors) {
        dispatch({ type: USER_PROFILE_ERROR });
        dispatch(setAlert(res.data.message, "danger"));

        errors.forEach((error) => {
          dispatch(setErrorsList(error.msg, error.param));
        });
      }
    }
  } catch (err) {
    console.log(err);
    dispatch({ type: USER_PROFILE_ERROR });
    dispatch(
      setAlert(
        "Errors! Please correct the following errors and submit again.",
        "danger"
      )
    );
  }
};

// User Profile Update
export const userProfileUpdate = (formData, history) => async (dispatch) => {
  dispatch({ type: REMOVE_ERRORS });
  dispatch(loadingOnSubmit());

  let param = new window.FormData();
  param.append("name", formData.name);
  param.append("email", formData.email);

  param.append("photo", formData.photo);
  // param.append("photo", formData.croppedImage);

  param.append("role", formData.role);
  param.append("phoneNumber", formData.phoneNumber);
  param.append("address", formData.address);
  param.append("companyName", formData.companyName);
  param.append("password", formData.password);
  param.append("passwordConfirm", formData.passwordConfirm);
  try {
    // const res = await axios.patch("api/v1/users/updateMe", formData);
    const res = await axios.patch(`api/v1/users/updateMe`, param);
    console.log("res", res);
    if (res.data.status === true) {
      dispatch({
        type: USER_PROFILE_UPDATED,
        payload: res.data.response,
      });
      dispatch(setAlert("Profile Updated.", "success"));
      history.push("/profile");
    } else {
      const errors = res.data.errors;
      if (errors) {
        dispatch({ type: USER_PROFILE_ERROR });
        dispatch(setAlert(res.data.message, "danger"));

        errors.forEach((error) => {
          dispatch(setErrorsList(error.msg, error.param));
        });
      }
    }
  } catch (err) {
    console.log(err);
    dispatch({
      type: USER_PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Dispatch Loading
export const loadingOnSubmit = () => async (dispatch) => {
  await dispatch({ type: LOADING_ON_PROFILE_SUBMIT });
};

// Cancel Submit Profile
export const cancelSave = (history) => async (dispatch) => {
  dispatch({ type: USER_PROFILE_ERROR });
  history.push("/profile");
};
