import React from 'react';
import './App.css';
<<<<<<< HEAD
// import SignInForm
import LogInForm from './components/LogInForm';

const handleSubmit = (values) => {
  console.log(values);
};
=======
import { Route, Switch } from 'react-router-dom';
import MyDreams from './components/MyDreams/index';
import HomePage from './components/HomePage/index';
import LogInForm from './components/LogInForm/index';
>>>>>>> e1fc89bfe30f46ca9d2b5cfeac6490589054139f

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit
          <code>src/App.js</code>
           and save to reload.
        </p>
        <div className="App-intro">
          <LogInForm onSubmit={handleSubmit} />
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
=======
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/mydreams/" component={MyDreams} />
        <Route path="/loginform/" component={LogInForm} />
      </Switch>
>>>>>>> e1fc89bfe30f46ca9d2b5cfeac6490589054139f
    </div>
  );
}

export default App;
