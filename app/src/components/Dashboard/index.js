import React from 'react';
import './index.css';
import {
  NavLink, Row, Container, Col,
}
  from 'reactstrap';
import BurgerMenu from '../BurgerMenu/index';


const Dashboard = () => (

  <div>
    <BurgerMenu />
    <Container>
      <Row>
        <Col xs="6">
          <NavLink href="/mybudget" className="my-budget" />
        </Col>
        <Col xs="6">
          <NavLink href="/mydreams" className="my-dreams" />
        </Col>
        <Col xs="6">
          <NavLink href="/myrewards" className="my-rewards" />
        </Col>
        <Col xs="6">
          <NavLink href="/myprofile" className="my-profile" />
        </Col>
      </Row>
    </Container>
  </div>
);

export default Dashboard;
