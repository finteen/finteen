
import React from 'react';
import { NavLink } from 'react-router-dom';

const Dashboard = () => (
  <div>
    <div>
      <NavLink to="/mybudget" className="my-budget">My Budget</NavLink>
    </div>
    <div>
      <NavLink to="/mydreams" className="my-dreams">My Dreams</NavLink>
    </div>
    <div>
      <NavLink to="/myrewards" className="my-rewards">My Rewards</NavLink>
    </div>
    <div>
      <NavLink to="/myprofils" className="my-profils">My Profils</NavLink>
    </div>
  </div>
);


export default Dashboard;
