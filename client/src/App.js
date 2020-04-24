import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import "./App.css";
import Nav from "./layout/Navbar";

const App = () => {
  return (
    <Router>
      <Fragment className="App">
        <Nav title="Contact Manager" icon="fa fac" />
        <div className="container">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
        </Switch>
        </div>
      </Fragment>
    </Router>
  );
};

export default App;
