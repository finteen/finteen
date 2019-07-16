import React from 'react';
import { PieChart } from 'react-chartkick';
import 'chart.js';
import './index.css';

const Graph = () => {
  const data = {
    Account: '200',
    PiggyBank: '111',
    IncomesOfTheMonth: '150',
  };
  const expense = {
    Sport: '20',
    Insurance: '20',
    Food: '25',
    Clothes: '20',
    Gifts: '10',
    Mobility: '10',
    Health: '5',
    Phone: '17',
    Entertainment: '14',
  };
  return (
    <div>
      <h2>My budget</h2>
      <PieChart data={data} />
      <h2>My expenses</h2>
      <PieChart data={expense} />
    </div>
  );
};


export default Graph;
