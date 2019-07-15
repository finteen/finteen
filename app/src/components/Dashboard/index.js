import React from 'react';
import './index.css';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
  NavLink, Row, Container, Col,
}
  from 'reactstrap';
import LogoBudget from '../../Assets/images/logomybudget.png';
import LogoDreams from '../../Assets/images/logomydreams.png';
import LogoRewards from '../../Assets/images/logomyrewards.png';
import LogoProfile from '../../Assets/images/logomyprofile.png';
import LogoQuizz from '../../Assets/images/logoquizz.png';
import LogoContact from '../../Assets/images/logocontact.png';
import BurgerMenu from '../BurgerMenu/index';


const Mydreams = () => (

  <div className="absolute">
    <BurgerMenu className="fixed" />
    <div className="rob">
      <Container className="container">
        <Row>
          <Col className="nopadding" xs="6" sm="4">
            <NavLink to="/mybudget" tag={RRNavLink}>
              <img src={LogoBudget} alt="logomybudget" className="logos-dashboard" />
            </NavLink>
          </Col>
          <Col className="nopadding" xs="6" sm="4">
            <NavLink to="/mydreams" tag={RRNavLink}>
              <img src={LogoDreams} alt="logomydreams" className="logos-dashboard" />
            </NavLink>
          </Col>
          <Col className="nopadding" xs="6" sm="4">
            <NavLink to="/myrewards" tag={RRNavLink}>
              <img src={LogoRewards} alt="logomyrewards" className="logos-dashboard" />
            </NavLink>
          </Col>
          <Col className="nopadding" xs="6" sm="4">
            <NavLink to="/quizz" tag={RRNavLink}>
              <img src={LogoQuizz} alt="quizz" className="logos-dashboard" />
            </NavLink>
          </Col>
          <Col className="nopadding" xs="6" sm="4">
            <NavLink to="/myprofile" tag={RRNavLink}>
              <img src={LogoProfile} alt="myprofile" className="logos-dashboard" />
            </NavLink>
          </Col>
          <Col className="nopadding" xs="6" sm="4">
            <NavLink to="/contactus" tag={RRNavLink}>
              <img src={LogoContact} alt="contact" className="logos-dashboard" />
            </NavLink>
          </Col>
        </Row>
      </Container>
    </div>
  </div>
);

export default Mydreams;
