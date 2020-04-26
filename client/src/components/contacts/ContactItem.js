import React, { useContext } from "react";
import ContactsContext from "../../context/contact/contactContext";

function ContactItem({ contact }) {
  const { _id, name, phone, email, type } = contact;
  const contactscontext = useContext(ContactsContext);
  const deleteContact = () => {
    contactscontext.deleteContact(_id);
    contactscontext.clearCurrent();
  };
  const setCurrentContact = () => {
    contactscontext.setCurrent(contact);
  };
  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">
        {name}{" "}
        <span
          style={{ float: "right" }}
          className={
            "badge " +
            (type === "professional" ? "badge-success" : "badge-primary")
          }
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>
      <ul>
        {email && (
          <li>
            <i className="fas fa-envelope-open"></i> {email}
          </li>
        )}
        {phone && (
          <li>
            <i className="fas fa-phone"></i> {phone}
          </li>
        )}
      </ul>
      <p>
        <button className="btn btn-dark btn-sm" onClick={setCurrentContact}>
          Edit
        </button>
        <button className="btn btn-danger btn-sm" onClick={deleteContact}>
          Delete
        </button>
      </p>
    </div>
  );
}

export default ContactItem;
