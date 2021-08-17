//import './App.css';
import React, {Fragment} from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/pages/Home';
//created default values
const App = () => {

  return (
    <Router>
      <Switch>
        <Route  path ='/' exact component = {Home}/>
      </Switch>
    </Router>
  )}

export default App;