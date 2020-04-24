import React, { useReducer } from "react";
import contactReducer from "./contactReducer";
import ContactContext from "./contactContext";
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
  };
  const [state, dispatch] = useReducer(contactReducer, initialState);
  // create contact
  const createContact = () => {
    const payload = {
      id: 6,
      name: "Eric Wampande",
      phone: "111-111-111",
      email: "eric@gmail.com",
      type: "professional",
    };
    dispatch({ type: ADD_CONTACT, payload });
  };
  // delete contact
  // set current contact
  // clear current contact
  // update contact
  // filter contact
  // clear filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};
export default ContactState;
