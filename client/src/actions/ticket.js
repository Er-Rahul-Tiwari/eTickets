import axios from "axios";
import { setAlert, removeAlert } from "./alert";
import { setErrorsList } from "./errors";
import {
  REMOVE_ERRORS,
  TICKET_CREATED,
  LOADING_ON_TICKET_SUBMIT,
  TICKET_ERROR,
  TICKET_LIST,
} from "./types";

// Create Ticket
export const create = (formData, history) => async (dispatch) => {
  dispatch({ type: REMOVE_ERRORS });
  dispatch(loadingOnSubmit());

  const config = {
    headers: {
      "content-type": "application/json; multipart/form-data;",
    },
  };
  let param = new window.FormData();
  param.append("name", formData.name);
  param.append("ticketType", formData.ticketType);
  param.append("currency", formData.currency);
  param.append("price", formData.price);
  param.append("quantity", formData.quantity);
  param.append("active", formData.active);
  param.append("dateTimeStart", formData.dateTimeStart);
  param.append("dateTimeEnd", formData.dateTimeEnd);

  // Not present yet
  param.append("eventStartTiming", formData.eventStartTiming);
  param.append("memberAllowPerTicket", formData.memberAllowPerTicket);
  param.append("paymentGetwayCharge", formData.paymentGetwayCharge);
  param.append("termsCondition", formData.termsCondition);

  // console.log(param);

  try {
    const res = await axios.post(`/api/v1/tickets`, param);
    if (res.data.status === true) {
      dispatch({
        type: TICKET_CREATED,
        payload: res.data.response,
      });
      dispatch(setAlert("Ticket Created.", "success"));
      history.push("/profile");
    } else {
      const errors = res.data.errors;
      console.log("errors", errors);
      console.log("message", res.data.message);
      if (errors) {
        dispatch({ type: TICKET_ERROR });
        dispatch(setAlert(res.data.message, "danger"));

        errors.forEach((error) => {
          dispatch(setErrorsList(error.msg, error.param));
        });
      }
    }
  } catch (err) {
    console.log(err);
    dispatch({ type: TICKET_ERROR });
    dispatch(
      setAlert(
        "Errors! Please correct the following errors and submit again.",
        "danger"
      )
    );
  }
};

// get Ticket List
export const getTicketList = ()=> async(dispatch)=>{
  try {
    const config = {headers: {"Content-Type": "application/json"}};
    const res = await axios.get(`/api/v1/tickets`, config);
    dispatch({
      type:  TICKET_LIST,
      payload: res.data.response,
    });
  } catch (error) {
    dispatch({
      type: TICKET_LIST,
      // payload: {msg: err.message.statusText,status: err.response.status},
    });
  }
};

// Dispatch Loading
export const loadingOnSubmit = () => async (dispatch) => {
  await dispatch({ type: LOADING_ON_TICKET_SUBMIT });
};

// Cancel Submit Event
export const cancelSave = (history) => async (dispatch) => {
  dispatch({ type: REMOVE_ERRORS });
  history.push("/profile");
  // history.push("/tickets");
};
