import React, { useState, useContext } from "react";
import ContactsContext from "../../context/contact/contactContext";

function ContactForm() {
  const [contact, setContact] = useState({
    name: "",
    phone: "",
    email: "",
    type: "personal",
  });
  const contactscontext = useContext(ContactsContext);

  const onChange = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    contactscontext.createContact(contact);
    // clear the form
    setContact({
      name: "",
      phone: "",
      email: "",
      type: "personal"
    });
  };
  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-primary">Add Contact</h2>
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
          value="Add Contact"
        />
      </div>
    </form>
  );
}

export default ContactForm;
