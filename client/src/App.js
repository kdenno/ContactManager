import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import "./App.css";
import Nav from "./components/layout/Navbar";
import ContactState from "./context/contact/contactState";
import AuthState from "./context/auth/authState";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import AlertState from "./context/alert/alertState";
import Alert from "./components/layout/Alerts";

const App = () => {
  return (
    <AlertState>
      <AuthState> 
        <ContactState>
          <Router>
            <Fragment>
              <Nav title="Contact Manager" icon="fa fac" />
              <div className="container">
                <Alert />
                <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/about" exact component={About} />
                  <Route path="/login" exact component={Login} />
                  <Route path="/register" exact component={Register} />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </ContactState>
      </AuthState>
    </AlertState>
  );
};

export default App;
