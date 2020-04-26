import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";

function PrivateRoute({ component: Component, ...rest }) {
  const authcontext = useContext(AuthContext);
  const { isAuthenticated, loading } = authcontext;
  return (
    // create a custom route that checks whether use is authenticated or not
    <Route
      {...rest}
      render={(props) =>
        !isAuthenticated && !loading ? (
          <Redirect to="/login" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
}

export default PrivateRoute;
