import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Navbar = ({ title, icon }) => {
  return (
    <Fragment>
      <div className="navbar">
      <div className="navbar bg-primary">
        <i className={icon}></i> {title}
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
      </div>
    </Fragment>
  );
};
Navbar.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
};
Navbar.defaultProps = {
  title: "Contact Manager",
  icon: "fas fa-id-card-alt",
};

export default Navbar;
