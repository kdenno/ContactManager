import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  CLEAR_ERRORS,
  LOGOUT,
} from "../ActionTypes";
export default (state, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {};
    case REGISTER_SUCCESS:
      return {};
    case LOGOUT:
      return {};
    default:
      return state;
  }
};
