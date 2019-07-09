/* eslint-disable react/button-has-type */
import React from 'react';
import { Progress } from 'reactstrap';
import './index.css';
import BurgerMenu from '../BurgerMenu/index';
import Playstation4 from '../../Assets/images/ps4.jpg';
import MichaelKors from '../../Assets/images/michaelkors.jpg';


const MyDreamsPage = () => (

  <div>
    <BurgerMenu />
    <h1>My Dreams</h1>
    <button className="add" routerLink="/mydreams">+</button>
    <h2>Playstation 4</h2>
    <div className="card">
      <p>250€</p>
      <img src={Playstation4} alt="Avatar" className="playstation" />
      <div className="progress">50%</div>
      <Progress value="50" />
    </div>
    <h3>Sac Michael Kors</h3>
    <div className="card">
      <p>350€</p>
      <img src={MichaelKors} alt="Avatar" className="michaelkors" />
      <div className="progress">25%</div>
      <Progress value="25" />
    </div>
  </div>
);


export default MyDreamsPage;
