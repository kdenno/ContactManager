import React, { useContext, Fragment } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ContactsContext from "../../context/contact/contactContext";
import ContactItem from "./ContactItem"; 

function Contacts() {
  const contactscontext = useContext(ContactsContext);
  const { contacts, filtered } = contactscontext;
  return (
    <Fragment>
      <TransitionGroup>
        {filtered
          ? filtered.map((contact) => (
              <CSSTransition key={contact.id} timeout={500} classNames="item">
                <ContactItem contact={contact} />
              </CSSTransition>
            ))
          : contacts.map((contact) => (
              <CSSTransition key={contact.id} timeout={500} classNames="item">
                <ContactItem contact={contact} />
              </CSSTransition>
            ))}
      </TransitionGroup>
    </Fragment>
  );
}

export default Contacts;
