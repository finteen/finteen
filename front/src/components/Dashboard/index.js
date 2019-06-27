import React from 'react';
import { NavLink } from 'react-router-dom';


const Dashboard = () => (
  <div>
    <div className="container-my-budget">
      <NavLink to="/mybudget" className="my-budget">My Budget</NavLink>
    </div>
    <div className="container-my-dreams">
      <NavLink to="/mydreams" className="my-dreams">My Dreams</NavLink>
    </div>
    <div className="container-my-rewards">
      <NavLink to="/myrewards" className="my-rewards">My Rewards</NavLink>
    </div>
    <div className="container-my-profils">
      <NavLink to="/myprofils" className="my-profils">My Profils</NavLink>
    </div>
  </div>
);


export default Dashboard;
