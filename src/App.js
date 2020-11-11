import React from 'react';
import Login from './component/login-form';
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Home from './component/Home';
import Product from './component/Produch_page'
import './App.css';
import Test from './component/test';


function App() {
  return (
   <Router>
      <Switch>
          
          <Route path='/'exact   component={Login} />
          <Route path='/home' component={Home} />
          <Route path='/Product' component={Product} />
      </Switch> 
   </Router>
  );
}

export default App;
