import React, { useState, useContext, useEffect } from "react";
import ContactsContext from "../../context/contact/contactContext";

function ContactForm() {
  const [contact, setContact] = useState({
    name: "",
    phone: "",
    email: "",
    type: "personal",
  });
  const contactscontext = useContext(ContactsContext);

  useEffect(() => {
    if (contactscontext.current) {
      setContact(contactscontext.current);
    } else {
      setContact({
        name: "",
        phone: "",
        email: "",
        type: "personal",
      });
    }
  }, [ContactsContext, contactscontext.current]);

  const onChange = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };
  const clearForm = () => {
    contactscontext.clearCurrent();
  }
  const onSubmit = (e) => {
    e.preventDefault();
    if(contactscontext.current) {
        contactscontext.updateContact(contact);
        contactscontext.clearFilter();
        contactscontext.clearCurrent();

    }else {
    contactscontext.createContact(contact);
    }
    // clear the form
    setContact({
      name: "",
      phone: "",
      email: "",
      type: "personal",
    });
  };
  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-primary">{contactscontext.current ? 'Edit Contact' : 'Add Contact'}</h2>
      <input
        type="text"
        name="name"
        placeholder="name"
        value={contact.name}
        onChange={onChange}
      />
      <input
        type="email"
        name="email"
        placeholder="email"
        value={contact.email}
        onChange={onChange}
      />
      <input
        type="text"
        name="phone"
        placeholder="phone"
        value={contact.phone}
        onChange={onChange}
      />
      <h5>Contact Type</h5>
      <input
        type="radio"
        name="type"
        placeholder="type"
        value="personal"
        checked={contact.type === "personal"}
        onChange={onChange}
      />{" "}
      Personal{" "}
      <input
        type="radio"
        name="type"
        placeholder="type"
        value="professional"
        checked={contact.type === "professional"}
        onChange={onChange}
      />{" "}
      Professional
      <div>
        <input
          type="submit"
          className="btn btn-primary btn-block"
          value={contactscontext.current ? 'Update Contact' : 'Add Contact'}
        />
      </div>

      {contactscontext.current ? <div className="btn btn-clear btn-block text-center" onClick={clearForm}>Clear</div> : null }
    </form>
  );
}

export default ContactForm;
