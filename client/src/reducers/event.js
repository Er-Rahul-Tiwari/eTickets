import {
  EVENT_LIST,
  EVENT_CREATED,
  EVENT_UPDATED,
  LOADING_ON_EVENT_SUBMIT,
  EVENT_ERROR,
  GET_EVENT_BY_ID,
} from "actions/types";

const initalState = {
  eventList: [],
  currentEvent: {},
  loading: false,
  listLoading: true,
  error: {},
};

export default function (state = initalState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOADING_ON_EVENT_SUBMIT:
      return {
        ...state,
        loading: true,
      };
    case EVENT_CREATED:
      return {
        ...state,
        loading: false,
      };
    case EVENT_LIST:
      return {
        ...state,
        listLoading: false,
        eventList: payload,
      };
    case EVENT_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case GET_EVENT_BY_ID:
      return {
        ...state,
        currentEvent: payload,
        loading: false,
      };
    case EVENT_UPDATED:
      return {
        ...state,
        currentEvent: payload,
        loading: false,
      };
    default:
      return state;
  }
}
