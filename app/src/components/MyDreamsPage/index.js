/* eslint-disable react/button-has-type */
import React from 'react';
import './index.css';
import BurgerMenu from '../BurgerMenu/index';

const MyDreamsPage = () => (

  <div>
    <BurgerMenu />
    <h1 className="title">
      <span className="yellow">M</span>
      <span className="blue">Y</span>
      <span className="pink" />
      <span className="yellow">D</span>
      <span className="blue">R</span>
      <span className="pink">E</span>
      <span className="green">A</span>
      <span className="green">M</span>
      <span className="yellow">S</span>
    </h1>

    <button className="myfriendsdreams">
      <span className="yellow">M</span>
      <span className="blue">Y</span>
      <span className="pink" />
      <span className="green">F</span>
      <span className="yellow">R</span>
      <span className="blue">I</span>
      <span className="pink">E</span>
      <span className="green">N</span>
      <span className="blue">D</span>
      <span className="green">S</span>
      <span className="pink" />
      <span className="yellow">D</span>
      <span className="blue">R</span>
      <span className="pink">E</span>
      <span className="green">A</span>
      <span className="green">M</span>
      <span className="yellow">S</span>
    </button>
  </div>

);


export default MyDreamsPage;
