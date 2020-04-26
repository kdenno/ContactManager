import React, { useState, useContext } from "react";
import AuthContext from "../../context/auth/authContext";
import AlertContext from "../../context/alert/alertContext";

function Register() {
  const [user, setLogin] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    password2: "",
  });
  const alertcontext = useContext(AlertContext);
  const authContext = useContext(AuthContext);
  const { name, email, password, password2 } = user;
  const onChange = (e) => {
    setLogin({ ...user, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "" || password2 === "") {
      alertcontext.triggerAlert('Please fill up all fields', 'danger');
    } else if (password !== password2) {
      alertcontext.triggerAlert('Passwords dont match', 'danger');
    } else {
     authContext.Register({name, email, password});
    }
  };
  return (
    <div className="form-container">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" value={name} onChange={onChange} required/>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" value={email} onChange={onChange} required/>
        </div>
        <div className="form-group">
          <label htmlFor="password1">Password</label>
          <input
            name="password"
            type="password"
            value={password}
            onChange={onChange}
            required
            minLength="6"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password2">Confirm Password</label>
          <input
            name="password2"
            type="password"
            value={password2}
            onChange={onChange}
            minLength="6"
          />
        </div>
        <input
          type="submit"
          className="btn btn-primary btn-block"
          value="Register"
        />
      </form>
    </div>
  );
}

export default Register;
