import React, { useReducer } from "react";
import contactReducer from "./contactReducer";
import ContactContext from "./contactContext";
import * as uuid from "uuid";
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

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "Jane Smith",
        phone: "111-111-111",
        email: "jane@gmail.com",
        type: "professional",
      },
      {
        id: 2,
        name: "Julian Draxler",
        phone: "222-222-222",
        email: "julian@gmail.com",
        type: "personal",
      },
      {
        id: 3,
        name: "Durell Johnson",
        phone: "555-111-222",
        email: "durrel@gmail.com",
        type: "professional",
      },
    ],
    current: null,
    filtered: null
  };
  const [state, dispatch] = useReducer(contactReducer, initialState);
  // create contact
  const createContact = (contact) => {
    contact.id = uuid.v4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };
  // delete contact
  const deleteContact = (id) => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };
  // set current contact
  const setCurrent = (contact) => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };
  // clear current contact
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };
  // update contact
  const updateContact = (contact) => {
      dispatch({type: UPDATE_CONTACT, payload: contact});

  }
  // filter contacts
  const filterContacts = (text) => {
    dispatch({type: FILTER_CONTACTS, payload: text})
  }
  // clear filter
  const clearFilter = () => {
    dispatch({type: CLEAR_FILTER})
  }

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        filterContacts,
        clearFilter,
        createContact,
        deleteContact,
        clearCurrent,
        updateContact,
        setCurrent,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};
export default ContactState;
