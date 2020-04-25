import React, { useContext, useEffect, useRef } from "react";
import ContactsContext from "../../../context/contact/contactContext";

function Filter() {
  const contactscontext = useContext(ContactsContext);
  const { filtered, filterContacts, clearFilter } = contactscontext;
  // initialize the text variable
  const text = useRef("");
  useEffect(() => {
    if (!filtered) {
      text.current.value = "";
    }
  }, [filtered, filterContacts]);

  const onChange = (e) => {
    if (text.current.value !== "") {
      filterContacts(e.target.value);
    } else {
      clearFilter();
    }
  };
  return (
    <form>
      <input
        type="text"
        ref={text}
        placeholder="Filter Contacts"
        onChange={onChange}
      />
    </form>
  );
}

export default Filter;
