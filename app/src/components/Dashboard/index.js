import React from 'react';
import { NavLink } from 'react-router-dom';


const Dashboard = () => (
  <React.Fragment>
    <NavLink to="/mybudget" className="my-budget">My Budget</NavLink>
    <NavLink to="/mydreams" className="my-dreams">My Dreams</NavLink>
    <NavLink to="/myrewards" className="my-rewards">My Rewards</NavLink>
    <NavLink to="/myprofils" className="my-profils">My Profils</NavLink>
  </React.Fragment>
);


export default Dashboard;
