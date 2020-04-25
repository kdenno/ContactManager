import React from "react";
import Contacts from "../components/contacts/Contacts";
import ContactForm from "../components/contacts/ContactForm";
import Filter from "../components/contacts/filter/Filter";

const Home = () => {
  return (
    <div className="grid-2">
      <div>
        <ContactForm />
      </div>
      <div>
        <Filter />
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
