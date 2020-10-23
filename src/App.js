import React from 'react';
import Login from './component/login-form';
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Home from './component/Home'
import './App.css';


function App() {
  return (
   <Router>
     
     <Route path='/'exact   component={Login} />
     <Route path='/Home' component={Home} />
  
     
     
   </Router>
    
  );
}

export default App;
