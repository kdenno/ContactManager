import React, { useReducer } from "react";
import contactReducer from "./contactReducer";
import ContactContext from "./contactContext";
import axios from "axios";
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
  GET_CONTACTS,
  ADD_CONTACT_FAIL,
  GET_CONTACTS_FAIL,
} from "../ActionTypes";

const ContactState = (props) => {
  const initialState = {
    contacts: [],
    current: null,
    filtered: null,
    error: null,
    loading: false,
  };
  const [state, dispatch] = useReducer(contactReducer, initialState);
  // Get user contacts
  const getContacts = async () => {
    try {
      const res = await axios.get("/api/contacts");
        dispatch({ type: GET_CONTACTS, payload: res.data.userContacts });
      
    } catch (error) {
      dispatch({ type: GET_CONTACTS_FAIL, payload: error.response.data.error });
    }
  };
  // create contact
  const createContact = async (contact) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("/api/contacts", contact, config);
        dispatch({ type: ADD_CONTACT, payload: res.data.newContact });
      
    } catch (error) {
      dispatch({ type: ADD_CONTACT_FAIL, payload: error.response.data.error });
    }
  };
  // delete contact
  const deleteContact = async (id) => {
    try {
      const res = await axios.delete(`/api/contacts/${id}`).then((res) => {
        dispatch({ type: DELETE_CONTACT, payload: id });
      });
    } catch (error) {
      dispatch({ type: GET_CONTACTS_FAIL, payload: error.response.data.error });
    }
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
  const updateContact = async (contact) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.put(`/api/contacts/${contact._id}`, contact, config);
        dispatch({ type: UPDATE_CONTACT, payload: res.data.updatedContact });
    
    } catch (error) {
      dispatch({ type: GET_CONTACTS_FAIL, payload: error.response.data.error });
    }
  };
  // filter contacts
  const filterContacts = (text) => {
    dispatch({ type: FILTER_CONTACTS, payload: text });
  };
  // clear filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        loading: state.loading,
        filterContacts,
        clearFilter,
        createContact,
        deleteContact,
        clearCurrent,
        updateContact,
        getContacts,
        setCurrent,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};
export default ContactState;
