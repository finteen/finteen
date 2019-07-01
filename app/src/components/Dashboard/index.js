import React from 'react';
import { NavLink } from 'react-router-dom';
import BurgerMenu from '../BurgerMenu/index';
import './index.css';

const Dashboard = () => (
  <React.Fragment>
    <BurgerMenu />
    <NavLink to="/mybudget" className="my-budget">My Budget</NavLink>
    <NavLink to="/mydreams" className="my-dreams">My Dreams</NavLink>
    <NavLink to="/myrewards" className="my-rewards">My Rewards</NavLink>
    <NavLink to="/myprofils" className="my-profils">My Profils</NavLink>
  </React.Fragment>
);


export default Dashboard;
