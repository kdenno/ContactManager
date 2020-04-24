import {
  CLEAR_CURRENT,
  SET_ALERT,
  SET_CURRENT,
  ADD_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  REMOVE_ALERT,
  CLEAR_FILTER,
} from "../ActionTypes";

const contactReducer = (state, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state
      };
    default:
      return state;
  }
};

export default contactReducer;
