import {
  TICKET_LIST,
  TICKET_CREATED,
  LOADING_ON_TICKET_SUBMIT,
  TICKET_ERROR,
} from "actions/types";

const initalState = {
  ticketList: [],
  currentTicket: [],
  loading: true,
  error: {},
};

export default function (state = initalState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOADING_ON_TICKET_SUBMIT:
      return {
        ...state,
        loading: true,
      };
    case TICKET_CREATED:
      return {
        ...state,
        loading: false,
      };
    case TICKET_LIST:
      return {
        ...state,
        loading: false,
      };
    case TICKET_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
