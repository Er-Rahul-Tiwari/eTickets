import { combineReducers } from "redux";
import auth from "./auth";
import alert from "./alert";
import errors from "./errors";
// import user from "./admin/user1";
import profile from "./profile";
import event from "./event";
import ticket from "./ticket";

export default combineReducers({
  auth,
  alert,
  // user,
  errors,
  profile,
  event,
  ticket,
});
