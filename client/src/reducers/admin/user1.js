import {
  USER_CREATED,
  USER_ERROR,
  DELETE_USER,
  USER_UPDATED,
  USER_LIST_UPDATED,
  GET_USER_BY_ID,
  USER_SEARCH_PARAMATERS_UPDATE,
  CHANGE_USER_STATUS,
  LOADING_ON_USER_SUBMIT,
} from "actions/types";
import * as Constants from "constants/index";

const initalState = {
  usersList: {
    page: 1,
    data: [],
    count: 0,
  },
  currentUser: [],
  loading: true,
  error: {},
  sortingParams: {
    limit: Constants.DEFAULT_PAGE_SIZE,
    page: 1,
    orderBy: "created_at",
    ascending: "desc",
    query: "",
    isAll: 1,
  },
};

export default function (state = initalState, action) {
  const { type, payload } = action;
  switch (type) {
    case USER_CREATED:
      return {
        ...state,
        loading: false,
      };
    case USER_UPDATED:
      return {
        ...state,
        currentUser: payload,
        // users: state.user.users.map(user =>
        //   user._id === payload._id ? { payload } : user
        // ),
        sortingParams: initalState.sortingParams,
        loading: false,
      };
    case USER_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case DELETE_USER:
      const currentCount = state.usersList.count;
      const currentLimit = initalState.sortingParams.limit;
      return {
        ...state,
        usersList: {
          data: state.usersList.data.filter((user) => user._id !== payload),
          count: currentCount - 1,
          page: Math.ceil((currentCount - 1) / currentLimit),
        },
        sortingParams: initalState.sortingParams,
        loading: false,
      };
    case GET_USER_BY_ID:
      return {
        ...state,
        currentUser: payload,
        loading: false,
      };
    case USER_LIST_UPDATED:
      return {
        ...state,
        usersList: {
          data: payload.data,
          page: payload.metadata[0].current_page,
          count: payload.metadata[0].totalRecord,
        },
        loading: false,
      };
    case USER_SEARCH_PARAMATERS_UPDATE:
      return {
        ...state,
        sortingParams: { ...payload },
      };
    case CHANGE_USER_STATUS:
      return {
        ...state,
        usersList: {
          ...state.usersList,
          data: state.usersList.data.map((user) =>
            user._id === payload._id
              ? { ...user, status: payload.status }
              : user
          ),
        },
      };
    case LOADING_ON_USER_SUBMIT:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
}
