/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { reducer as formReducers } from 'redux-form';
import * as serviceWorker from './serviceWorker';
import App from './App';

const rootReducer = combineReducers({
  form: formReducers,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

<<<<<<< HEAD
ReactDOM.render(// wrap App into Provider tags
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
=======
ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, 
document.getElementById('root'));
>>>>>>> e1fc89bfe30f46ca9d2b5cfeac6490589054139f

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
