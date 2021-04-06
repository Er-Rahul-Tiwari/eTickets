import axios from "axios";
import { setAlert } from "./alert";
import { setErrorsList } from "./errors";
import {
  REMOVE_ERRORS,
  EVENT_CREATED,
  EVENT_UPDATED,
  LOADING_ON_EVENT_SUBMIT,
  EVENT_ERROR,
  EVENT_LIST,
  GET_EVENT_BY_ID,
} from "./types";

// Create Event
export const create = (formData, history) => async (dispatch) => {
  dispatch({ type: REMOVE_ERRORS });
  dispatch(loadingOnSubmit());

  let param = new window.FormData();
  param.append("imageCover", formData.croppedImage);
  param.append("name", formData.name);
  if (formData.tags) {
    formData.tags.split(",").forEach((val, key) => {
      param.append("tags[" + key + "]", val);
    });
  }
  param.append("type", formData.type);
  param.append("organizerName", formData.organizerName);
  param.append("eventType", formData.eventType);
  param.append("eventCategory", formData.eventCategory);
  param.append("startDate", formData.eventStartDate);
  param.append("endDate", formData.eventEndDate);
  param.append("bookingStarts", formData.bookingStartDate);
  param.append("bookingEnds", formData.bookingEndDate);
  param.append("description", formData.description);
  param.append("locations", formData.eventLocation);
  param.append("city", formData.city);
  param.append("states", formData.states);
  param.append("country", formData.country);
  param.append("eventGuide[0].name", formData.guide_name);
  param.append("eventGuide[0].phone", formData.phone);
  param.append("eventGuide[0].email", formData.email);
  try {
    const res = await axios.post(`/api/v1/events`, param);
    if (res.data.status === true) {
      dispatch({
        type: EVENT_CREATED,
        payload: res.data.response,
      });
      dispatch(setAlert("Event Created.", "success"));
      history.push("/events");
    } else {
      const errors = res.data.errors;
      if (errors) {
        dispatch({ type: EVENT_ERROR });
        dispatch(setAlert(res.data.message, "danger"));

        errors.forEach((error) => {
          dispatch(setErrorsList(error.msg, error.param));
        });
      }
    }
  } catch (err) {
    console.log(err);
    dispatch({ type: EVENT_ERROR });
    dispatch(
      setAlert(
        "Errors! Please correct the following errors and submit again.",
        "danger"
      )
    );
  }
};

// Edit Assignment
export const edit = (formData, history, id) => async (dispatch) => {
  dispatch({ type: REMOVE_ERRORS });
  dispatch(loadingOnSubmit());

  let param = new window.FormData();
  param.append("imageCover", formData.croppedImage);
  param.append("name", formData.name);
  console.log("formData", formData);
  // if (formData.tags) {
  //   formData.tags.split(",").forEach((val, key) => {
  //     param.append("tags[" + key + "]", val);
  //   });
  // }
  param.append("tags", formData.tags);
  param.append("type", formData.type);
  param.append("organizerName", formData.organizerName);
  param.append("eventType", formData.eventType);
  param.append("eventCategory", formData.eventCategory);
  param.append("startDate", formData.eventStartDate);
  param.append("endDate", formData.eventEndDate);
  param.append("bookingStarts", formData.bookingStartDate);
  param.append("bookingEnds", formData.bookingEndDate);
  param.append("description", formData.description);
  param.append("locations", formData.eventLocation);
  param.append("city", formData.city);
  param.append("states", formData.states);
  param.append("country", formData.country);
  param.append("eventGuide[0].name", formData.guide_name);
  param.append("eventGuide[0].phone", formData.phone);
  param.append("eventGuide[0].email", formData.email);

  try {
    const res = await axios.patch(`/api/v1/events/${id}`, param);
    if (res.data.status === true) {
      dispatch({
        type: EVENT_UPDATED,
        payload: res.data.response,
      });
      dispatch(setAlert("Event Updated.", "success"));
      history.push("/events");
    } else {
      const errors = res.data.errors;
      if (errors) {
        dispatch({ type: EVENT_ERROR });
        dispatch(setAlert(res.data.message, "danger"));

        errors.forEach((error) => {
          dispatch(setErrorsList(error.msg, error.param));
        });
      }
    }
  } catch (err) {
    dispatch({
      type: EVENT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//get Event list
export const getEventList = () => async (dispatch) => {
  try {
    const config = { headers: { "Content-Type": "application/json" } };
    const res = await axios.get("/api/v1/events", config);
    dispatch({
      type: EVENT_LIST,
      payload: res.data.response,
    });
  } catch (err) {
    dispatch({
      type: EVENT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Dispatch Loading
export const loadingOnSubmit = () => async (dispatch) => {
  await dispatch({ type: LOADING_ON_EVENT_SUBMIT });
};

// Cancel Submit Event
export const cancelSave = (history) => async (dispatch) => {
  dispatch({ type: REMOVE_ERRORS });
  history.push("/events");
};

//get Event list
export const getEventById = (id) => async (dispatch) => {
  dispatch({ type: REMOVE_ERRORS });
  dispatch(loadingOnSubmit());
  try {
    const config = { headers: { "Content-Type": "application/json" } };
    const res = await axios.get(`/api/v1/events/${id}`, config);
    dispatch({
      type: GET_EVENT_BY_ID,
      payload: res.data.response,
    });
    return res.data.response;
  } catch (err) {
    // console.log(err);
    dispatch({
      type: EVENT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
    return undefined;
  }
};
