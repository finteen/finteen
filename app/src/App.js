import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import LoginPage from './components/LoginPage/index';
import Dashboard from './components/Dashboard/index';
import SignupPage from './components/SignupPage/index';
import MyrewardsPage from './components/MyrewardsPage';
import MyBudgetPage from './components/MyBudgetPage/index';
import MyDreamsPage from './components/MyDreamsPage';
import QuizzPage from './components/QuizzPage';
import MyProfilePage from './components/MyProfilePage';
import ContactPage from './components/ContactPage';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/dashboard/" component={Dashboard} />
        <Route path="/signupform/" component={SignupPage} />
        <Route path="/myrewards/" component={MyrewardsPage} />
        <Route path="/mybudget/" component={MyBudgetPage} />
        <Route path="/mydreams/" component={MyDreamsPage} />
        <Route path="/quizz/" component={QuizzPage} />
        <Route path="/myprofile/" component={MyProfilePage} />
        <Route path="/contactus/" component={ContactPage} />
      </Switch>
    </div>
  );
}

export default App;
