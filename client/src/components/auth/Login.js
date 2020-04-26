import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../../context/auth/authContext";
import AlertContext from "../../context/alert/alertContext";

function Login(props) {
  const [user, setLogin] = useState({
    email: "",
    password: "",
  });

  const alertcontext = useContext(AlertContext);
  const authContext = useContext(AuthContext);
  const { email, password } = user;

  useEffect(() => {
    if (authContext.isAuthenticated) {
      props.history.push("/");
    }
    if (authContext.error) {
      // trigger alert
      alertcontext.triggerAlert(authContext.error, "danger");
      alertcontext.clearErrors();
    }
    // eslint-disable-next-line
  }, [authContext.error, props.history, authContext.isAuthenticated]);

  const onChange = (e) => {
    setLogin({ ...user, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    authContext.Login({ email, password });
  };
  return (
    <div className="form-container">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input name="email" type="email" value={email} onChange={onChange} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            value={password}
            onChange={onChange}
          />
        </div>
        <input
          type="submit"
          className="btn btn-primary btn-block"
          value="Login"
        />
      </form>
    </div>
  );
}

export default Login;
