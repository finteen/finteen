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

  <div>
    <BurgerMenu />
    <Container>
      <Row>
        <Col xs="6">
          <NavLink to="/mybudget" className="my-budget" tag={RRNavLink}>
            <img src={LogoBudget} alt="logomybudget" className="logos-dashboard" />
          </NavLink>
        </Col>
        <Col xs="6">
          <NavLink to="/mydreams" className="my-dreams" tag={RRNavLink}>
            <img src={LogoDreams} alt="logomydreams" className="logos-dashboard" />
          </NavLink>
        </Col>
        <Col xs="6">
          <NavLink to="/myrewards" className="my-rewards" tag={RRNavLink}>
            <img src={LogoRewards} alt="logomyrewards" className="logos-dashboard" />
          </NavLink>
        </Col>
        <Col xs="6">
          <NavLink href="https://www.finteen.be/" target="_blank">
            <img src={LogoQuizz} alt="quizz" className="logos-dashboard" />
          </NavLink>
        </Col>
        <Col xs="6">
          <NavLink to="/myprofile" className="my-profile" tag={RRNavLink}>
            <img src={LogoProfile} alt="myprofile" className="logos-dashboard" />
          </NavLink>
        </Col>
        <Col xs="6">
          <NavLink to="/contactus" tag={RRNavLink}>
            <img src={LogoContact} alt="contact" className="logos-dashboard" />
          </NavLink>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Mydreams;
