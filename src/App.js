//import './App.css';
import React, {Fragment} from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Components/pages/Home';
//created default values
const App = () => {

  return (
    <BrowserRouter>
    <Route exact path ='/' component = {Home}/>
    </BrowserRouter>
  )}

export default App;