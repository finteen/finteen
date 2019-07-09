import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage/index';
import LoginPage from './components/LoginPage/index';
import Dashboard from './components/Dashboard/index';
import SignupPage from './components/SignupPage/index';
import MyDreamsPage from './components/MyDreamsPage/index';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/dashboard/" component={Dashboard} />
        <Route path="/signupform/" component={SignupPage} />
        <Route path="/mydreams/" component={MyDreamsPage} />
      </Switch>
    </div>
  );
}

export default App;
