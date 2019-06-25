import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage/index';
import LoginPage from './components/LoginPage/index';
import Dashboard from './components/Dashboard/index';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/loginform/" component={LoginPage} />
        <Route path="/dashboard/" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
