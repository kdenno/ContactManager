import React, { useContext, Fragment, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ContactsContext from "../../context/contact/contactContext";
import ContactItem from "./ContactItem";

function Contacts() {
  const contactscontext = useContext(ContactsContext);
  const { contacts, filtered, getContacts, loading } = contactscontext;

  useEffect(() => {
    getContacts();
  }, []);

  let thecontacts;
  if (contacts.length > 0 && !loading) {
    thecontacts = (
      <TransitionGroup>
        {filtered
          ? filtered.map((contact) => (
              <CSSTransition key={contact._id} timeout={500} classNames="item">
                <ContactItem contact={contact} />
              </CSSTransition>
            ))
          : contacts.map((contact) => (
              <CSSTransition key={contact._id} timeout={500} classNames="item">
                <ContactItem contact={contact} />
              </CSSTransition>
            ))}
      </TransitionGroup>
    );
  } else {
    thecontacts = <p>No contacts yet, please add some</p>;
  }
  return <Fragment>{thecontacts}</Fragment>;
}

export default Contacts;
