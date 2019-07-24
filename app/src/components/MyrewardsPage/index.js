import React from 'react';
import BurgerMenu from '../BurgerMenu/index';
import Rewards from '../../Assets/images/unnamed.jpg';

const MyrewardsPage = () => (
  <div>
    <BurgerMenu />
    <div className="n">
      <h2>My Rewards</h2>
      <img src={Rewards} alt="rewards" className="rewards" />
    </div>
  </div>
);
export default MyrewardsPage;
