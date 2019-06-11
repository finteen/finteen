import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import MyDreams from './components/MyDreams/index';
import HomePage from './components/HomePage/index';
import LogInForm from './components/LogInForm/index';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/mydreams/" component={MyDreams} />
          <Route path="/loginform/" component={LogInForm} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
