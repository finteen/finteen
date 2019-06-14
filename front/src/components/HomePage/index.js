import React from 'react';
import './index.css';
import Logo from '../../tools/images/logofinteen.png';
import LogoSil from '../../tools/images/logosilouhette.png';
import LogInForm from '../LogInForm/index';

const HomePage = () => (

  <div className="home_page">
    <h1 className="titre">Hello</h1>
    <img className="logo_finteen" src={Logo} alt="logo" />
    <img className="logo_silouhette" src={LogoSil} alt="logosil" />
    <LogInForm />
  </div>

);

export default HomePage;
