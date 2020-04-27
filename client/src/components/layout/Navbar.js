import React, { Fragment, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import AuthContext from "../../context/auth/authContext";

const Navbar = ({ title, icon }) => {
  const authcontext = useContext(AuthContext);
  const { LogOut, isAuthenticated, user } = authcontext;
  const onLogout = () => {
    LogOut();
  }

  let thelinks;
  if (isAuthenticated) {
    thelinks = (
      <Fragment>
        <li>
    <a href="#!">Hi {user &&  user.name}</a>
        </li>
        <li>
          <a href="#!" onClick={onLogout}>LogOut</a>
        </li>
      </Fragment>
    );
  } else {
    thelinks = (
      <Fragment>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
      </Fragment>
    );
  }
  return (
    <Fragment className="navbar">
   
      <div className="navbar bg-primary">
        <i className={icon}></i> {title}
        <ul>{thelinks}</ul>
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
