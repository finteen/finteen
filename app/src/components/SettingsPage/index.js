import React from 'react';
import './index.css';
import BurgerMenu from '../BurgerMenu/index';


const SettingsPage = () => (

  <div>
    <BurgerMenu />
    <h1>Settings</h1>
    <ul>
      <li>Change language</li>
      <li>Change country</li>
    </ul>
  </div>
);

export default SettingsPage;
