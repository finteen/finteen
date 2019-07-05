import React from 'react';
import './index.css';
import {
  NavLink, Row, Container, Col,
}
  from 'reactstrap';
import LogoBudget from '../../Assets/images/logomybudget.png';
import LogoDreams from '../../Assets/images/logomydreams.jpg';
import LogoRewards from '../../Assets/images/logomyrewards.jpg';
import LogoProfile from '../../Assets/images/logomyprofils.jpg';
import LogoQuizz from '../../Assets/images/logoquizz.png';
import LogoContact from '../../Assets/images/logocontact.png';
import BurgerMenu from '../BurgerMenu/index';


const Mydreams = () => (

  <div>
    <BurgerMenu />
    <Container>
      <Row>
        <Col xs="6">
          <NavLink href="/mybudget" className="my-budget">
            <img src={LogoBudget} alt="logomybudget" />
          </NavLink>
        </Col>
        <Col xs="6">
          <NavLink href="/mydreams" className="my-dreams">
            <img src={LogoDreams} alt="logomydreams" />
          </NavLink>
        </Col>
        <Col xs="6">
          <NavLink href="/myrewards" className="my-rewards">
            <img src={LogoRewards} alt="logomyrewards" />
          </NavLink>
        </Col>
        <Col xs="6">
          <NavLink href="/myprofile" className="my-profile">
            <img src={LogoProfile} alt="myprofils" />
          </NavLink>
        </Col>
        <Col xs="6">
          <NavLink href="/quizz" className="quizz">
            <img src={LogoQuizz} alt="quizz" />
          </NavLink>
        </Col>
        <Col xs="6">
          <NavLink href="/contactus" className="contact">
            <img src={LogoContact} alt="contact" />
          </NavLink>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Mydreams;
