import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Compose from "./pages/Compose";
import "./App.css";

const App = () => {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/compose-email" component={Compose} />
          <Route path="/about-us" component={About} />
        </Switch>
      </Router>
    </Fragment>
  );
};

export default App;
