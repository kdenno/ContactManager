import React, { useContext} from "react";
import ContactsContext from "../../context/contact/contactContext";
import ContactItem from "./ContactItem";

function Contacts() {
  const contactscontext = useContext(ContactsContext);
  const {
    contacts
  } = contactscontext;
  return (
    <div>
      {contacts.map((contact) => ( <ContactItem contact={contact} key={contact.id} /> ))}
    </div>
  );
}

export default Contacts;
