import React from 'react';
import './index.css';
import { NavLink } from 'react-router-dom';

const HomePage = () => (

  <div className="home_page">
    <NavLink to="/homepage/">Home page</NavLink>
  </div>
);

export default HomePage;
