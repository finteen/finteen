import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import LoginPage from './components/LoginPage/index';
import Dashboard from './components/Dashboard/index';
import SignupPage from './components/SignupPage/index';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/dashboard/" component={Dashboard} />
        <Route path="/signupform/" component={SignupPage} />
      </Switch>
    </div>
  );
}

export default App;
