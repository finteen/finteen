import React from 'react';
import './index.css';
import BurgerMenu from '../BurgerMenu/index';


const MyDreams = () => (

  <div>
    <BurgerMenu />
    <h1>My Dreams</h1>
    <div className="card">
      <img src="img_avatar.png" alt="Avatar" />
      <div className="container">
        <h2><b>Playsatation 4</b></h2>
        <p>Prix : 251€</p>
      </div>
    </div>
    <div className="card">
      <img src="img_avatar.png" alt="Avatar" />
      <div className="container">
        <h4><b>Sac Michael Kors</b></h4>
        <p>Prix </p>
      </div>
    </div>
  </div>
);


export default MyDreams;
