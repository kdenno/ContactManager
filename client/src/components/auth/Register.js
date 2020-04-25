import React, { useState, useContext } from "react";
import AuthContext from "../../context/auth/authContext";

function Register() {
  const [user, setLogin] = useState({
    name: "",
    email: "",
    phone: "",
    password1: "",
    password2: "",
  });
  const authContext = useContext(AuthContext);
  const { name, email, password1, password2 } = user;
  const onChange = (e) => {
    setLogin({ ...user, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    authContext.Register(user);
  };
  return (
    <div className="form-container">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" value={name} onChange={onChange} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" value={email} onChange={onChange} />
        </div>
        <div className="form-group">
          <label htmlFor="password1">Password</label>
          <input
            name="password1"
            type="password"
            value={password1}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password2">Confirm Password</label>
          <input
            name="password2"
            type="password"
            value={password2}
            onChange={onChange}
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
